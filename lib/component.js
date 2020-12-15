/* eslint-env browser */
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YMInitializer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _init = _interopRequireDefault(require("./init"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var YMInitializer = /*#__PURE__*/function (_Component) {
  _inherits(YMInitializer, _Component);

  var _super = _createSuper(YMInitializer);

  function YMInitializer() {
    _classCallCheck(this, YMInitializer);

    return _super.apply(this, arguments);
  }

  _createClass(YMInitializer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _init["default"])(this.props.accounts, this.props.options, this.props.version);
      var el = document.createElement('script');
      var attrs = this.props.attrs;
      el.type = 'text/javascript';
      el.async = true;
      el.src = (0, _constants.scriptPath)(this.props.version);
      Object.keys(attrs).map(function (i) {
        if (el.__proto__.hasOwnProperty(i)) {
          el.setAttribute(i, attrs[i]);
        }
      });
      this.insertPoint.insertBefore(el, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var setInsertPoint = function setInsertPoint(element) {
        _this.insertPoint = element;
      };

      return _react["default"].createElement(this.props.containerElement, {
        ref: setInsertPoint
      }, this.props.children);
    }
  }]);

  return YMInitializer;
}(_react.Component);

exports.YMInitializer = YMInitializer;
YMInitializer.displayName = 'YMInitializer';
YMInitializer.propTypes = {
  accounts: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  containerElement: _propTypes["default"].string,
  options: _propTypes["default"].object,
  attrs: _propTypes["default"].object,
  version: _propTypes["default"].oneOf(['1', '2', '3'])
};
YMInitializer.defaultProps = {
  containerElement: 'div',
  options: {},
  attrs: {},
  version: '1'
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxhOzs7Ozs7Ozs7Ozs7O3dDQUVrQjtBQUNoQiw0QkFBSyxLQUFLLEtBQUwsQ0FBVyxRQUFoQixFQUEwQixLQUFLLEtBQUwsQ0FBVyxPQUFyQyxFQUE4QyxLQUFLLEtBQUwsQ0FBVyxPQUF6RDtBQUNBLFVBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQSxVQUFJLEtBQUssR0FBRyxLQUFLLEtBQUwsQ0FBVyxLQUF2QjtBQUNBLE1BQUEsRUFBRSxDQUFDLElBQUgsR0FBVSxpQkFBVjtBQUNBLE1BQUEsRUFBRSxDQUFDLEtBQUgsR0FBVyxJQUFYO0FBQ0EsTUFBQSxFQUFFLENBQUMsR0FBSCxHQUFTLDJCQUFXLEtBQUssS0FBTCxDQUFXLE9BQXRCLENBQVQ7QUFDQSxNQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBWixFQUFtQixHQUFuQixDQUF1QixVQUFBLENBQUMsRUFBSTtBQUN4QixZQUFJLEVBQUUsQ0FBQyxTQUFILENBQWEsY0FBYixDQUE0QixDQUE1QixDQUFKLEVBQW9DO0FBQ2hDLFVBQUEsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBSyxDQUFDLENBQUQsQ0FBeEI7QUFDSDtBQUNKLE9BSkQ7QUFLQSxXQUFLLFdBQUwsQ0FBaUIsWUFBakIsQ0FBOEIsRUFBOUIsRUFBa0MsSUFBbEM7QUFDSDs7OzZCQUVRO0FBQUE7O0FBQ0wsVUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBaUIsQ0FBQyxPQUFELEVBQWE7QUFDOUIsUUFBQSxLQUFJLENBQUMsV0FBTCxHQUFtQixPQUFuQjtBQUNILE9BRkQ7O0FBR0EsYUFBTyxrQkFBTSxhQUFOLENBQ0gsS0FBSyxLQUFMLENBQVcsZ0JBRFIsRUFFSDtBQUFDLFFBQUEsR0FBRyxFQUFFO0FBQU4sT0FGRyxFQUdILEtBQUssS0FBTCxDQUFXLFFBSFIsQ0FBUDtBQUtIOzs7O0VBMUJ1QixnQjs7O0FBOEI1QixhQUFhLENBQUMsV0FBZCxHQUE0QixlQUE1QjtBQUVBLGFBQWEsQ0FBQyxTQUFkLEdBQTBCO0FBQ3RCLEVBQUEsUUFBUSxFQUFFLHNCQUFVLE9BQVYsQ0FBa0Isc0JBQVUsTUFBNUIsRUFBb0MsVUFEeEI7QUFFdEIsRUFBQSxnQkFBZ0IsRUFBRSxzQkFBVSxNQUZOO0FBR3RCLEVBQUEsT0FBTyxFQUFFLHNCQUFVLE1BSEc7QUFJdEIsRUFBQSxLQUFLLEVBQUUsc0JBQVUsTUFKSztBQUt0QixFQUFBLE9BQU8sRUFBRSxzQkFBVSxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCO0FBTGEsQ0FBMUI7QUFRQSxhQUFhLENBQUMsWUFBZCxHQUE2QjtBQUN6QixFQUFBLGdCQUFnQixFQUFFLEtBRE87QUFFekIsRUFBQSxPQUFPLEVBQUUsRUFGZ0I7QUFHekIsRUFBQSxLQUFLLEVBQUUsRUFIa0I7QUFJekIsRUFBQSxPQUFPLEVBQUU7QUFKZ0IsQ0FBN0IiLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IHNjcmlwdFBhdGggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFlNSW5pdGlhbGl6ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGluaXQodGhpcy5wcm9wcy5hY2NvdW50cywgdGhpcy5wcm9wcy5vcHRpb25zLCB0aGlzLnByb3BzLnZlcnNpb24pO1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgbGV0IGF0dHJzID0gdGhpcy5wcm9wcy5hdHRycztcbiAgICAgICAgZWwudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBlbC5hc3luYyA9IHRydWU7XG4gICAgICAgIGVsLnNyYyA9IHNjcmlwdFBhdGgodGhpcy5wcm9wcy52ZXJzaW9uKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLm1hcChpID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5fX3Byb3RvX18uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaSwgYXR0cnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbnNlcnRQb2ludC5pbnNlcnRCZWZvcmUoZWwsIG51bGwpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNldEluc2VydFBvaW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0UG9pbnQgPSBlbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGFpbmVyRWxlbWVudCxcbiAgICAgICAgICAgIHtyZWY6IHNldEluc2VydFBvaW50fSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuWU1Jbml0aWFsaXplci5kaXNwbGF5TmFtZSA9ICdZTUluaXRpYWxpemVyJztcblxuWU1Jbml0aWFsaXplci5wcm9wVHlwZXMgPSB7XG4gICAgYWNjb3VudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgY29udGFpbmVyRWxlbWVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGF0dHJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZlcnNpb246IFByb3BUeXBlcy5vbmVPZihbJzEnLCAnMicsICczJ10pXG59O1xuXG5ZTUluaXRpYWxpemVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250YWluZXJFbGVtZW50OiAnZGl2JyxcbiAgICBvcHRpb25zOiB7fSxcbiAgICBhdHRyczoge30sXG4gICAgdmVyc2lvbjogJzEnXG59O1xuXG5leHBvcnQgeyBZTUluaXRpYWxpemVyIH07XG4iXX0=