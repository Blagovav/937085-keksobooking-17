'use strict';

var list = [];
var items = ['palace', 'flat', 'house', 'bungalo'];
var n = ['01', '02', '03', '04', '05', '06', '07', '08'].sort(function () {
  return Math.random(n) - 0.5;
});

var generatPinData = function () {
  for (var i = 0; i < n.length; i++) {
    list.push(
        {
          'author': {
            'avatar': 'img/avatars/user' + n[i] + '.png'
          },
          'offer': {
            'type': items[Math.floor(Math.random() * items.length)],
          },
          'location': {
            'x': Math.floor(Math.random() * 1000) + 10,
            'y': Math.floor(Math.random() * 600) + 100
          }
        }
    );
  }
  return list;
};

var createBlock = function (templ, pin) {
  var block = templ.cloneNode(true);
  block.style.left = pin.location.x + 'px';
  block.style.top = pin.location.y + 'px';
  block.querySelector('img').src = pin.author.avatar;
  block.querySelector('img').alt = pin.offer.type;
  return block;
};

var renderPins = function () {
  var sector = document.querySelector('.map');
  sector.classList.remove('map--faded');

  var blocks = document.querySelector('.map__pins');
  var template = document.querySelector('#pin')
.content
.querySelector('.map__pin');
  var fragment = document.createDocumentFragment();
  var pinData = generatPinData();
  for (var i = 0; i < n.length; i++) {
    var block = createBlock(template, pinData[i]);
    fragment.append(block);
  }
  blocks.append(fragment);
};

var mainPin = document.querySelector('.map__pin--main');
var adForm = document.querySelector('.ad-form');

var fildsetDisable = function () {
  var fildsetD = adForm.getElementsByTagName('fieldset');
  for (var i = 0; i < fildsetD.length; i++) {
    fildsetD[i].setAttribute('disable', 'disable');
  }
};

mainPin.addEventListener('click', function () {
  var userDialog = document.querySelector('.map');
  userDialog.classList.remove('map--faded');
  renderPins();
  adForm.classList.remove('ad-form--disabled');
  fildsetDisable();
});
