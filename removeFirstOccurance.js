function removeFirstOccurrence(text, searchString) {
  return text.replace(searchString, "");
}

// contoh penggunaan
const text = "Hello Friends!";
const searchStringToRemove = "end";
console.log(removeFirstOccurrence(text, searchStringToRemove));
