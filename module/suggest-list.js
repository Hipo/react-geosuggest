'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _suggestItem = require('./suggest-item');

var _suggestItem2 = _interopRequireDefault(_suggestItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The list with suggestions. Either from an API or provided as fixture
 * @param {Object} props The component's props
 * @return {JSX} The icon component.
 */
// eslint-disable-line no-unused-vars

exports.default = function (_ref) {
  var _ref$isHidden = _ref.isHidden;
  var isHidden = _ref$isHidden === undefined ? true : _ref$isHidden;
  var _ref$suggests = _ref.suggests;
  var suggests = _ref$suggests === undefined ? [] : _ref$suggests;
  var activeSuggest = _ref.activeSuggest;
  var _ref$onSuggestMouseDo = _ref.onSuggestMouseDown;
  var onSuggestMouseDown = _ref$onSuggestMouseDo === undefined ? function () {} : _ref$onSuggestMouseDo;
  var _ref$onSuggestMouseOu = _ref.onSuggestMouseOut;
  var onSuggestMouseOut = _ref$onSuggestMouseOu === undefined ? function () {} : _ref$onSuggestMouseOu;
  var _ref$onSuggestSelect = _ref.onSuggestSelect;
  var onSuggestSelect = _ref$onSuggestSelect === undefined ? function () {} : _ref$onSuggestSelect;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;
  var _ref$suggestItemStyle = _ref.suggestItemStyle;
  var suggestItemStyle = _ref$suggestItemStyle === undefined ? {} : _ref$suggestItemStyle;
  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? null : _ref$children;

  var classes = (0, _classnames2.default)('geosuggest__suggests', { 'geosuggest__suggests--hidden': isHidden });
  return _react2.default.createElement(
    'ul',
    { className: classes, style: style },
    suggests.map(function (suggest) {
      var isActive = activeSuggest && suggest.placeId === activeSuggest.placeId;

      return _react2.default.createElement(_suggestItem2.default, { key: suggest.placeId,
        className: suggest.className,
        suggest: suggest,
        style: suggestItemStyle,
        isActive: isActive,
        onMouseDown: onSuggestMouseDown,
        onMouseOut: onSuggestMouseOut,
        onSelect: function onSelect() {
          return onSuggestSelect(suggest);
        } });
    }),
    suggests.length > 0 ? children : null
  );
};