---
name: recipe-from-json
description: Converts a Sharp Cooking JSON recipe file into Hugo content pages for both EN and PT languages. Use when asked to convert a recipe JSON file, add a recipe to the website, or import a recipe from the Sharp Cooking app.
argument-hint: [json-file-path]
allowed-tools: Read Write Bash Glob
---

## Task

Convert the Sharp Cooking JSON recipe at `$input` into Hugo website pages for both English and Portuguese.

## Steps

### 1. Read the JSON

Read the recipe JSON file. The structure is:
```json
{
  "id": 3,
  "title": "Recipe Title",
  "score": 5,
  "ingredients": ["item 1", "item 2"],
  "steps": ["step 1", "step 2"],
  "notes": null,
  "changedOn": "2025-03-16T03:19:16.950Z",
  "nutrition": { "calories": 0, ... },
  "category": "Cakes",
  "media": [{ "type": "img", "url": "data:image/jpeg;base64,..." }]
}
```

Because recipe files may be large (base64 images), use a Python script to read the file and print fields except `media`, then extract the image separately.

### 2. Extract the image

If `media` contains a base64 image (`data:image/...;base64,...`), run a Python script to decode and save it:

- Output path: `static/images/recipes/<slug>.jpg` (or `.png` based on MIME type)
- Slug: lowercase title with spaces replaced by hyphens, special characters removed
 
### 3. Calculate missing values

The JSON rarely includes time or nutrition. Estimate them from the recipe content:

**Times** — infer from the steps text:
- `prepTime` / `prepTimeISO`: time for non-baking/cooking steps
- `cookTime` / `cookTimeISO`: time explicitly mentioned for baking, frying, simmering
- `totalTime` / `totalTimeISO`: sum of prep + cook (use `~` prefix if approximate)
- ISO format: `PT30M` for 30 minutes, `PT1H30M` for 1h30, `PT15H` for 15 hours

**Nutrition per 100g** — estimate from ingredient weights when all nutrition fields are 0. Mark as `aiGenerated: true`.

**Servings** — infer from recipe type and yield (e.g., "8 servings", "1 loaf", "4 portions").

**Tags** — derive from the recipe category and type (use lowercase English for EN, lowercase Portuguese for PT).

### 4. Create the EN file

Path: `content/en/recipes/list/<slug>.md`

Use this exact front matter structure (no extra fields):

```yaml
---
title: "Recipe Title"
date: YYYY-MM-DD
tags: ["tag"]
geekdocHidden: true
imageUrl: /images/recipes/<slug>.jpg
description: One sentence description.
source: ""
prepTime: "15 min"
cookTime: "30 min"
totalTime: "45 min"
prepTimeISO: "PT15M"
cookTimeISO: "PT30M"
totalTimeISO: "PT45M"
servings: "8 servings"
ingredients:
  - item 1
  - item 2
instructions:
  - Step one
  - Step two
notes: ""
nutrition:
  aiGenerated: true
  servingSize: 100
  calories: 0
  totalFat: 0
  saturatedFat: 0
  transFat: 0
  cholesterol: 0
  Sodium: 0
  carbs: 0
  fiber: 0
  sugar: 0
  protein: 0
---
```

- `date`: use the `changedOn` date (YYYY-MM-DD only)
- `source`: leave as `""` if not present in the JSON
- `notes`: use the JSON `notes` field; use `""` if null

### 5. Create the PT file

Path: `content/pt/recipes/list/<slug>.md`

Same structure as EN but with:
- `title` translated to Portuguese
- `description` translated to Portuguese
- `tags` translated to Portuguese (e.g., `["bolo"]` instead of `["cake"]`)
- `servings` translated (e.g., `"8 porções"`)
- `ingredients` translated to Portuguese
- `instructions` translated to Portuguese
- `notes` translated to Portuguese (if not empty)
- All other fields (dates, times, nutrition, imageUrl) remain identical to EN

## Reference files

- EN example: `content/en/recipes/list/sourdough-bread.md`
- PT example: `content/pt/recipes/list/sourdough-bread.md`
- Existing recipe images: `static/images/recipes/`
