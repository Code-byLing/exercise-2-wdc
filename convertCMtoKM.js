function convertCMtoKm(number, unit) {
  if (unit === "cm") {
    return number / 100000 + " km";
  } else if (unit === "km") {
    return number * 100000 + " cm";
  } else {
    return "unit yang dimasukkan salah";
  }
}

// contoh penggunaan
const number = 5000;
const unit = "cm";
console.log(convertCMtoKm(number, unit));
