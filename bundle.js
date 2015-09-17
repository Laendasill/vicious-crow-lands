(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jsGame = require('./js/game');

var _jsGame2 = _interopRequireDefault(_jsGame);

var _jsPlayer = require('./js/player');

var _jsPlayer2 = _interopRequireDefault(_jsPlayer);

var _jsQuestion = require('./js/question');

var _jsQuestion2 = _interopRequireDefault(_jsQuestion);

var cuteCrow = function cuteCrow() {
  _classCallCheck(this, cuteCrow);

  this.game = _jsGame2['default'];
  this.player = _jsPlayer2['default'];
  this.question = _jsQuestion2['default'];
};

},{"./js/game":2,"./js/player":3,"./js/question":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var game = (function () {
  function game(players, questions) {
    _classCallCheck(this, game);

    this.players = players;
    this.questions = questions;
  }

  _createClass(game, [{
    key: "addPlayer",
    value: function addPlayer(player) {
      this.players += player;
    }
  }, {
    key: "removePlayer",
    value: function removePlayer(player) {
      var todel = this.players.map(function (el) {
        if (el.id === player.id) {
          return el.id;
        }
      });
      throw "not implemented";
    }
  }]);

  return game;
})();

exports["default"] = game;

/*
var game = (function(){
  'use strict';
    var  players   = [],
         questions = []
         ;
    function init(){

    }


    function addPlayer(player){
      players.push(player);
    }



  return {
    players: players,
    init: init,
    addPlayer: addPlayer

  };

})();
var cuteCrow = cuteCrow || {};
cuteCrow.game = game;
*/
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var player = function player(points, name) {
  var id = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  _classCallCheck(this, player);

  this.id = id;
  this.points = points;
  this.name = name;
}
/*
var player = (function(){
    var points = 0,  //INT
        name  = "gracz"
        ;   //String




    return {
      init: init,

        // Testing private variables

      points: points,
      name:   name
    };
})();

var cuteCrow = cuteCrow || {};
*/
;

exports["default"] = player;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var question = function question() {
  _classCallCheck(this, question);
}
/*
var question = (function(){
  var question,
      ansers = [],
      correct = 0;
      //idk what to do
  function fromJson(js){

  }


  return {

    question: "",
    ansers: [],
    correct: 0
  };
})();
*/
;

exports["default"] = question;
module.exports = exports["default"];

},{}]},{},[1]);
