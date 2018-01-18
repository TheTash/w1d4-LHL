// The second argument/parameter is expected to be a function
/*

var Where = {
   findWaldo: function (arr, found) {
    for (var i = 0; i < arr.length; i++)
      if (arr[i] === "Waldo") {
        found(i, "Waldo");   // execute callback
  }
},

  actionWhenFound: function (index, name) {
    console.log(`${name} is at ${index}!` );
  },



}



Where.findWaldo(["Alice", "Bob", "Waldo", "Winston"], Where.actionWhenFound);
*/


function findWaldo(arr, found) {
  arr.forEach(function(el, i) {
    if (el === "Waldo") {
      found(i, el);   // execute callback
    }
  });
}

function actionWhenFound(el, i) {
  console.log(`${el} is found at index ${i}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


