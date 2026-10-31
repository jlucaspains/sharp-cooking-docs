import { parseIngredient, parseInstruction } from "https://cdn.jsdelivr.net/npm/@jlucaspains/sharp-recipe-parser@2.1.0/+esm";

// Highlights quantities, times and temperatures in recipe pages and shows parsed details on click.
// Display logic mirrors sharp-cooking-web's multiplierHelpers.ts without the multiplier.

const localeByLanguage = { en: "en-US", pt: "pt-BR" };

const language = document.documentElement.lang?.startsWith("pt") ? "pt" : "en";
const locale = localeByLanguage[language];
const labels = JSON.parse(document.getElementById("recipe-parser-labels")?.textContent || "{}");
const dialog = document.getElementById("recipe-details");

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatNumber(value) {
  return value.toLocaleString(locale, { maximumFractionDigits: 2 });
}

function highlight(html, pattern, flags = "i") {
  return html.replace(new RegExp(pattern, flags), '<span class="recipe-highlight">$&</span>');
}

function secondsToString(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts = [];
  if (days > 0) parts.push(`${days} ${labels.days}`);
  if (hours > 0) parts.push(`${hours} ${labels.hours}`);
  if (minutes > 0) parts.push(`${minutes} ${labels.minutes}`);
  if (seconds > 0) parts.push(`${seconds} ${labels.seconds}`);

  return parts.join(" ") || "0";
}

function prepareIngredient(input) {
  const result = parseIngredient(input, locale, { includeExtra: true, includeAlternativeUnits: true, fallbackLanguage: language });

  if (!result || !result.quantity) {
    return null;
  }

  const quantityText = result.quantityText.trim();
  let html = escapeHtml(input);
  if (quantityText) {
    const unitPattern = result.unitText ? `( ?)${escapeRegExp(result.unitText)}` : "";
    html = highlight(html, `${escapeRegExp(quantityText)}${unitPattern}`);
  }

  const quantity = result.minQuantity !== result.maxQuantity
    ? `${formatNumber(result.minQuantity)} - ${formatNumber(result.maxQuantity)}`
    : formatNumber(result.quantity);

  const rows = [
    [labels.quantity, quantity],
    [labels.unit, result.unitText],
    [labels.ingredient, result.ingredient],
  ].filter(([, value]) => value);

  const alternatives = result.alternativeQuantities
    .filter(item => item.quantity > 0.1)
    .map(item => [formatNumber(item.quantity), item.unitText]);

  return { html, title: labels.ingredientDetails, rows, alternativesTitle: labels.alternativeUnits, alternatives };
}

function prepareStep(input) {
  const result = parseInstruction(input, locale, { includeAlternativeTemperatureUnit: true, fallbackLanguage: language });

  if (!result || (result.totalTimeInSeconds <= 0 && result.temperature <= 0)) {
    return null;
  }

  let html = escapeHtml(input);
  const rows = [];

  if (result.totalTimeInSeconds > 0) {
    for (const timeItem of result.timeItems) {
      html = highlight(html, `${escapeRegExp(timeItem.timeText)}( ?)${escapeRegExp(timeItem.timeUnitText)}`, "g");
    }
    rows.push([labels.time, secondsToString(result.totalTimeInSeconds)]);
  }

  if (result.temperature > 0) {
    html = highlight(html, `${result.temperature}( ?[\\w°]* ?)${escapeRegExp(result.temperatureUnitText)}`);
    rows.push([labels.temperature, `${formatNumber(result.temperature)} ${result.temperatureUnit}`]);
  }

  const alternatives = result.alternativeTemperatures.map(item => [formatNumber(item.quantity), item.unitText]);

  return { html, title: labels.stepDetails, rows, alternativesTitle: labels.alternativeTemperatures, alternatives };
}

function showDetails(details) {
  dialog.querySelector(".recipe-details-title").textContent = details.title;

  const body = dialog.querySelector(".recipe-details-body");
  body.replaceChildren();

  const list = document.createElement("dl");
  for (const [label, value] of details.rows) {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value;
    list.append(term, description);
  }
  body.append(list);

  if (details.alternatives.length > 0) {
    const heading = document.createElement("p");
    heading.className = "recipe-details-subtitle";
    heading.textContent = details.alternativesTitle;

    const table = document.createElement("table");
    for (const [quantity, unit] of details.alternatives) {
      const row = table.insertRow();
      row.insertCell().textContent = quantity;
      row.insertCell().textContent = unit;
    }
    body.append(heading, table);
  }

  dialog.showModal();
}

function enhance(items, prepare) {
  for (const item of items) {
    const details = prepare(item.textContent.trim());

    if (!details) {
      continue;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "recipe-detail-trigger";
    button.innerHTML = details.html;
    button.addEventListener("click", () => showDetails(details));
    item.replaceChildren(button);
  }
}

if (dialog) {
  enhance(document.querySelectorAll(".recipe-ingredients > li"), prepareIngredient);
  enhance(document.querySelectorAll(".recipe-steps > li"), prepareStep);

  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
