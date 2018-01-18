var words = ["ground", "control", "to", "major", "tom"];

function map (arr, callback) {
  var lyric = [];

  for (let i = 0; i < arr.length; i++){
    lyric.push(callback(words[i]));
  }
  return lyric;
};



var lengths = map(words, function(word) {
  return word.length;
});


var caps = map(words, function(word) {
  return word.toUpperCase();
});

var madness = map(words, function(word) {
  return word.split('').reverse().join('');
});


console.log(lengths, caps, madness);