"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GuessedWords = function GuessedWords(props) {
  var contents;

  if (props.guessedWords.length === 0) {
    contents = _react.default.createElement("span", {
      "data-test": "quessed-instructions"
    }, "Try to guess the secret word!");
  } else {
    var guessedWordsRow = props.guessedWords.map(function (word, index) {
      return _react.default.createElement("tr", {
        "data-test": "guessed-word",
        key: "tr-".concat(index)
      }, _react.default.createElement("td", null, word.guessedWord), _react.default.createElement("td", null, word.letterMatchCount));
    });
    contents = _react.default.createElement("div", {
      "data-test": "guessed-words"
    }, _react.default.createElement("h3", null, "Guessed Words"), _react.default.createElement("table", {
      className: "table table-sm"
    }, _react.default.createElement("thead", {
      className: "thead thead-light"
    }, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Guess"), _react.default.createElement("th", null, "Matching letters"))), _react.default.createElement("tbody", null, guessedWordsRow)));
  }

  return _react.default.createElement("div", {
    "data-test": "component-quessed-words"
  }, contents);
};

GuessedWords.propTypes = {
  guessedWords: _propTypes.default.arrayOf(_propTypes.default.shape({
    guessedWord: _propTypes.default.string.isRequired,
    letterMatchCount: _propTypes.default.number.isRequired
  }))
};
var _default = GuessedWords;
exports.default = _default;

//# sourceMappingURL=GuessedWords.js.map