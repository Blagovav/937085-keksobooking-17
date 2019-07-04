'use strict';

var getrandomNumbers = function () {
  var list = [];
  var NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8].sort(function (NUMBERS) {
    return Math.random(NUMBERS) - 0.5;
});
  NUMBERS.forEach (function (i) {
    list.push({'id': i});
  });
  return list;
}

var TYPE = ['place', 'flat', 'house', 'bungalo'];

var getrandomType = function () {
  var randomType = Math.floor(Math.random() * TYPE.length);
  return TYPE[randomType];
};

var getrandomPositionY = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getrandomPositionX = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var arrObject = [];

arrObject[0] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630),
  locationX: getrandomPositionX(10, 1000)
};

arrObject[1] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630)
};

arrObject[2] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630)
};

arrObject[3] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630),
  locationX: getrandomPositionX(10, 1000)
};

arrObject[4] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630),
  locationX: getrandomPositionX(10, 1000)
};
arrObject[5] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630),
  locationX: getrandomPositionX(10, 1000)
};
arrObject[6] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630),
  locationX: getrandomPositionX(10, 1000)
};

arrObject[7] = {
  avatar: getrandomNumbers(),
  offer: getrandomType(),
  locationY: getrandomPositionY(130, 630),
  locationX: getrandomPositionX(10, 1000)
};

var userDialog = document.querySelector('.map');
userDialog.classList.remove('map--faded');

