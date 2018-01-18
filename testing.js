function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i, "Waldo");   // execute callback
    }
  }
}

function actionWhenFound(index, name) {
  console.log(`${name} is found at index ${index}!`);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

var forEach (arr, found) {
  for (var i = 0; i < arr.length; i++) {
    found(i, "Waldo");
  }
}
forEach(["Alice", "Bob", "Waldo", "Winston"], found);