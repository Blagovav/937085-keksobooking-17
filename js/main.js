'use strict';

var list = [];
var generatPinData = (8);
var items = ['palace', 'flat', 'house', 'bungalo'];
var r = ['01', '02', '03', '04', '05', '06', '07', '08'].sort(function () {
  return Math.random(r) - 0.5;
});

for (var i = 0; i < r.length; i++) {
  list.push(
      {
        'author': {
          'avatar': 'img/avatars/user' + r[i] + '.png'
        },
        'offer': {
          'type': items[Math.floor(Math.random() * items.length)],
        },
        'location': {
          'x': Math.floor(Math.random() * 1000) + 10,
          'y': Math.floor(Math.random() * 630) + 130
        }
      }
  );
}

var createBlock = function (templ) {
  var block = templ.cloneNode(true);
  block.style.left = list.location.x + 'px';
  block.style.top = list.location.y + 'px';
  block.querySelector('img').src = list.author.avatar;
  block.querySelector('img').alt = list.alt.text;
};

var renderPins = function (n) {
  var sector = document.querySelector('.map');
  sector.classList.remove('map--faded');

  var blocks = document.querySelector('.map__pins');
  var template = document.querySelector('#pin')
.content
.querySelector('.map__pin');
  var fragment = document.createDocumentFragment();
  var pinData = generatPinData;
  for (i = 0; i < n; i++) {
    var block = createBlock(template, pinData[i]);
    fragment.appendChild(block);
  }
  blocks.appendChild(fragment);
};

var mainPin = document.querySelector('.map__pin--main');
mainPin.addEventListener('click', function () {
  var userDialog = document.querySelector('.map');
  userDialog.classList.remove('map--faded');
  renderPins(8);
});


