---
title: Create or update a recipe
weight: 30
---

Creating or adjusting a recipe is as simple as it gets. There are, however, a few conventions that will help your recipes look and work the best within Sharp Cooking:

1. Start each ingredient with a number followed by a unit of measure.
3. Keep ingredient description short. Use the notes fields for any lengthy description or explanation
5. When denoting time in instructions use the following syntax where x is a number: x min; x minute; x minutes; x hour; x hours; x day; x days

Example ingredients:
|Ingredient|Good?|Notes|
|-|-|-|
|1000 grams flour|✔️|Perfect!|
|10g salt|✔️|You don't have to separate quantity and UOM|
|1.5 sticks of butter|✔️|decimals are fine|
|1/2 carrot|✔️|Fractions are also fine|
|1 1/2 limes|✔️|Composite fractions work too. Note that no connection between the whole number and fraction is needed|
|1 or 2 carrots|❌|The multiplier feature will not understand this because it requires a single quantity for ingredients|
|1 bunch of trimmed and finely chopped cilantro|❌|The ingredient is too wordy and the display may not look nice. You can move the details to the instructions area and simplify the ingredient.|

Example instructions:
|Instructions|Good?|Notes|
|-|-|-|
|Mix all ingredients|✔️|Time notation is not required. If ommitted a configurable amount of time is assumed for display|
|Bake at 450F for 35 minutes|✔️|The time for this step will be read as 35 minutes|
|Cook for 15 minutes, cover, cook for another 15 minutes, and repeat|❌|Multiple instructions are not properly understood. Each time-bound operation should a be a dedicated instruction.|
|Boil for 20 seconds|❌|Only minutes, hours, and days are valid for time-bound instructions.|

## Add Manually
{{< hint type=tip >}}
You can use the enter key to create a new ingredient or step and move to it.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_add_options.jpg" alt="iOS add options" >}}
➡️
{{< ios-screenshot src="/images/ios_add_manually.jpg" alt="iOS add manually" >}}

## Import from website
The import feature is very simple, you provide the URL of a recipe and sharp-cooking will do the rest. It is smart enough to break down the ingredients and steps for you so all you have to do is save.

Most modern recipe websites will now work with Sharp Cooking's import feature. If your favorite website doesn't work, create an issue in the [GitHub repository](https://github.com/jlucaspains/sharp-cooking-web/issues).

{{< hint type=tip >}}
Before importing a recipe from website, you will need the address of the recipe. Using your favorite browser, navigate to the recipe page and copy its address from the browser's address bar before proceeding.
{{< /hint >}}

{{< youtube CzJe6r2RwDA >}}