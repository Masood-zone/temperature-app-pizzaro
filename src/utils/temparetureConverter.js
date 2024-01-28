// Function for Celcius to Fahrenheit
export function celcToFahr(celcius) {
  return (celcius * 9.0) / 5.0 + 32.0;
}

// Function for Fahrenheit to Celcius
export function farenToCelcius(faren) {
  return (faren - 32) * (5 / 9);
}
