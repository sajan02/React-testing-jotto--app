"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Functional react component for Congratulatory message. 
 * @function
 * @param {object} props - Reeact props. 
 * @returns {JSX.Element} - Rendered component { or null if `success` prop is false}
 */
var Congrats = function Congrats(props) {
  return _react.default.createElement("div", {
    "data-test": "component-congrats",
    className: "alert alert-success"
  }, props.success ? _react.default.createElement("span", {
    "data-test": "congrats-message"
  }, "Congratulations! You guessed the word!") : null);
};

Congrats.propTypes = {
  success: _propTypes.default.bool.isRequired
};
var _default = Congrats;
exports.default = _default;

//# sourceMappingURL=Congrats.js.map