'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDates = require('react-dates');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _modifiers = require('./modifiers');

var _modifiers2 = _interopRequireDefault(_modifiers);

var _SelectTypes = require('./SelectTypes');

var _SelectTypes2 = _interopRequireDefault(_SelectTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DatePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.getInitialMonth = function () {
            return (0, _moment2.default)().add(_this.props.initialVisibleMonth, 'month');
        }, _this.handleDateChange = function (date) {
            var _createModifiers = (0, _modifiers2.default)(_this.props),
                blocked = _createModifiers.blocked;

            var _this$props = _this.props,
                range = _this$props.range,
                startDate = _this$props.startDate,
                endDate = _this$props.endDate,
                onDateSelect = _this$props.onDateSelect;


            if (blocked && blocked(date)) return false;

            if (!range) {
                onDateSelect({ type: _SelectTypes2.default.START, value: date });
                return true;
            }

            if (!startDate) {
                onDateSelect({ type: _SelectTypes2.default.START, value: date });
                return true;
            }

            if (date.isBefore(startDate) || endDate) {
                onDateSelect({ type: _SelectTypes2.default.START, value: date });
                onDateSelect({ type: _SelectTypes2.default.END, value: null });
                return true;
            }

            if (date.isAfter(startDate)) {
                onDateSelect({ type: _SelectTypes2.default.END, value: date });
                return true;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // eslint-disable-next-line consistent-return


    _createClass(DatePicker, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactDates.DayPicker, _extends({}, this.props, {
                numberOfMonths: this.props.months,
                onDayClick: this.handleDateChange,
                modifiers: (0, _modifiers2.default)(this.props),
                initialVisibleMonth: this.getInitialMonth
            }));
        }
    }]);

    return DatePicker;
}(_react2.default.Component);

DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
    range: false,
    startDate: undefined,
    endDate: undefined,
    minDate: undefined,
    maxDate: undefined,
    months: 1,
    initialVisibleMonth: 0,
    modifiers: {}
};
exports.default = DatePicker;