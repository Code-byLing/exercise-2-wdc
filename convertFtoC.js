function convertFahrenheitToCelsius(fahrenheit) {
  let result = (((fahrenheit - 32) * 5) / 9).toFixed(2);

  return result;
}

const fahrenheit = prompt("Masukkan temperatur dalam Fahrenheit:");

console.log(
  `Hasil covert temparatur dalam Celsius: ${fahrenheitToCelsius(fahrenheit)}`
);
