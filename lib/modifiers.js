'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDateInSelection = exports.isDateSelectionEnd = exports.isDateSelectionStart = exports.isDateBlocked = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isDateBlocked = exports.isDateBlocked = function isDateBlocked(date, _ref) {
    var minDate = _ref.minDate,
        maxDate = _ref.maxDate;
    return !!minDate && date.isBefore(minDate) // isBefore
    || !!maxDate && date.isAfter(maxDate);
}; // isAfter

var isDateSelectionStart = exports.isDateSelectionStart = function isDateSelectionStart(date, _ref2) {
    var startDate = _ref2.startDate;
    return !!startDate && date.isSame(startDate, 'day');
};

var isDateSelectionEnd = exports.isDateSelectionEnd = function isDateSelectionEnd(date, _ref3) {
    var endDate = _ref3.endDate;
    return !!endDate && date.isSame(endDate, 'day');
};

var isDateInSelection = exports.isDateInSelection = function isDateInSelection(date, props) {
    return !!props.startDate && date.isBetween(props.startDate, props.endDate, 'day') || isDateSelectionStart(date, props) || isDateSelectionEnd(date, props);
};

var createModifiers = function createModifiers(_ref4) {
    var modifiers = _ref4.modifiers,
        props = _objectWithoutProperties(_ref4, ['modifiers']);

    return _extends({
        blocked: function blocked(date) {
            return isDateBlocked(date, props);
        },
        'selected-start': function selectedStart(date) {
            return isDateSelectionStart(date, props);
        },
        selected: function selected(date) {
            return isDateInSelection(date, props);
        },
        'selected-end': function selectedEnd(date) {
            return isDateSelectionEnd(date, props);
        }
    }, modifiers);
};

exports.default = createModifiers;