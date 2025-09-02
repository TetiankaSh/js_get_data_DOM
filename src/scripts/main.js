'use strict';

// Get all text data from span.population
const populationSpans = document.querySelectorAll('span.population');

// Convert to numbers (remove commas and parse to integer)
const populations = Array.from(populationSpans, (span) => {
  const cleaned = span.textContent.replace(/,/g, '');
  const value = Number.parseInt(cleaned, 10);

  return Number.isNaN(value) ? 0 : value;
});

// Calculate total and average
const totalPopulation = populations.reduce((sum, current) => sum + current, 0);
const averagePopulation =
  populations.length > 0 ? totalPopulation / populations.length : 0;

// Format numbers with thousands separator
const formatNumber = (number) => number.toLocaleString();

// Replace "Calculate it!" with results
const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

if (averageSpan) {
  averageSpan.textContent = formatNumber(Math.round(averagePopulation));
}

if (totalSpan) {
  totalSpan.textContent = formatNumber(totalPopulation);
}
