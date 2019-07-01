var NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];
var TYPE = ['place', 'flat', 'house', 'bungalo'];

var getrandomNumbers = function() {
  var randomNumbers = Math.floor(Math.random() * NUMBERS.length);
  return NUMBERS[randomNumbers];
};

var getrandomType = function () {
  var randomType = Math.floor(Math.random() * TYPE.length);
  return TYPE[randomType];
};

var arrObject = [];

arrObject[0] = {
  avatar: getrandomNumbers(),
  offer: getrandomType()
}

arrObject[1] = {
  avatar: getrandomNumbers(),
  offer: getrandomType()
}

arrObject[2] = {
  avatar: getrandomNumbers(),
  offer: getrandomType()
}
