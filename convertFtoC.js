function convertFahrenheitToCelsius(fahrenheit) {
  let result = (((fahrenheit - 32) * 5) / 9).toFixed(2);

  return result;
}

// contoh penggunaan
const fahrenheit = 400;

console.log(
  `Hasil covert temparatur dalam Celsius: ${fahrenheitToCelsius(fahrenheit)}`
);
