/* eslint-env browser */
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YMInitializer = YMInitializer;

var _react = _interopRequireWildcard(require("react"));

var _init = _interopRequireDefault(require("./init"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function YMInitializer(_ref) {
  var _ref$accounts = _ref.accounts,
      accounts = _ref$accounts === void 0 ? [] : _ref$accounts,
      _ref$containerElement = _ref.containerElement,
      containerElement = _ref$containerElement === void 0 ? 'div' : _ref$containerElement,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$attrs = _ref.attrs,
      attrs = _ref$attrs === void 0 ? {} : _ref$attrs,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? '1' : _ref$version,
      children = _ref.children;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      insertPoint = _useState2[0],
      setInsertPoint = _useState2[1];

  (0, _react.useEffect)(function () {
    (0, _init["default"])(accounts, options, version);
    var el = document.createElement('script');
    el.type = 'text/javascript';
    el.async = true;
    el.src = (0, _constants.scriptPath)(version);
    Object.keys(attrs).map(function (i) {
      if (el.__proto__.hasOwnProperty(i)) {
        el.setAttribute(i, attrs[i]);
      }
    });
    insertPoint.insertBefore(el, null);
  }, []);

  var handleSetInsertPoint = function handleSetInsertPoint(element) {
    setInsertPoint(element);
  };

  return _react["default"].createElement(containerElement, {
    ref: handleSetInsertPoint
  }, children);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwibmFtZXMiOlsiWU1Jbml0aWFsaXplciIsImFjY291bnRzIiwiY29udGFpbmVyRWxlbWVudCIsIm9wdGlvbnMiLCJhdHRycyIsInZlcnNpb24iLCJjaGlsZHJlbiIsImluc2VydFBvaW50Iiwic2V0SW5zZXJ0UG9pbnQiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpIiwiX19wcm90b19fIiwiaGFzT3duUHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJoYW5kbGVTZXRJbnNlcnRQb2ludCIsImVsZW1lbnQiLCJSZWFjdCIsInJlZiJdLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcbmltcG9ydCB7IHNjcmlwdFBhdGggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIFlNSW5pdGlhbGl6ZXIoe1xuICAgIGFjY291bnRzID0gW10sXG4gICAgY29udGFpbmVyRWxlbWVudCA9ICdkaXYnLFxuICAgIG9wdGlvbnMgPSB7fSxcbiAgICBhdHRycyA9IHt9LFxuICAgIHZlcnNpb24gPSAnMScsXG4gICAgY2hpbGRyZW5cbn0pIHtcbiAgICBjb25zdCBbaW5zZXJ0UG9pbnQsIHNldEluc2VydFBvaW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpbml0KGFjY291bnRzLCBvcHRpb25zLCB2ZXJzaW9uKTtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgZWwuYXN5bmMgPSB0cnVlO1xuICAgICAgICBlbC5zcmMgPSBzY3JpcHRQYXRoKHZlcnNpb24pO1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykubWFwKGkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsLl9fcHJvdG9fXy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShpLCBhdHRyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnNlcnRQb2ludC5pbnNlcnRCZWZvcmUoZWwsIG51bGwpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVNldEluc2VydFBvaW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgc2V0SW5zZXJ0UG9pbnQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBjb250YWluZXJFbGVtZW50LFxuICAgICAgICB7IHJlZjogaGFuZGxlU2V0SW5zZXJ0UG9pbnQgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICApO1xufVxuXG5leHBvcnQgeyBZTUluaXRpYWxpemVyIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsT0FPRztFQUFBLHlCQU5DQyxRQU1EO0VBQUEsSUFOQ0EsUUFNRCw4QkFOWSxFQU1aO0VBQUEsaUNBTENDLGdCQUtEO0VBQUEsSUFMQ0EsZ0JBS0Qsc0NBTG9CLEtBS3BCO0VBQUEsd0JBSkNDLE9BSUQ7RUFBQSxJQUpDQSxPQUlELDZCQUpXLEVBSVg7RUFBQSxzQkFIQ0MsS0FHRDtFQUFBLElBSENBLEtBR0QsMkJBSFMsRUFHVDtFQUFBLHdCQUZDQyxPQUVEO0VBQUEsSUFGQ0EsT0FFRCw2QkFGVyxHQUVYO0VBQUEsSUFEQ0MsUUFDRCxRQURDQSxRQUNEOztFQUNDLGdCQUFzQyxzQkFBdEM7RUFBQTtFQUFBLElBQU9DLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBRUEsc0JBQVUsWUFBTTtJQUNaLHNCQUFLUCxRQUFMLEVBQWVFLE9BQWYsRUFBd0JFLE9BQXhCO0lBQ0EsSUFBSUksRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtJQUNBRixFQUFFLENBQUNHLElBQUgsR0FBVSxpQkFBVjtJQUNBSCxFQUFFLENBQUNJLEtBQUgsR0FBVyxJQUFYO0lBQ0FKLEVBQUUsQ0FBQ0ssR0FBSCxHQUFTLDJCQUFXVCxPQUFYLENBQVQ7SUFDQVUsTUFBTSxDQUFDQyxJQUFQLENBQVlaLEtBQVosRUFBbUJhLEdBQW5CLENBQXVCLFVBQUFDLENBQUMsRUFBSTtNQUN4QixJQUFJVCxFQUFFLENBQUNVLFNBQUgsQ0FBYUMsY0FBYixDQUE0QkYsQ0FBNUIsQ0FBSixFQUFvQztRQUNoQ1QsRUFBRSxDQUFDWSxZQUFILENBQWdCSCxDQUFoQixFQUFtQmQsS0FBSyxDQUFDYyxDQUFELENBQXhCO01BQ0g7SUFDSixDQUpEO0lBS0FYLFdBQVcsQ0FBQ2UsWUFBWixDQUF5QmIsRUFBekIsRUFBNkIsSUFBN0I7RUFDSCxDQVpELEVBWUcsRUFaSDs7RUFjQSxJQUFNYyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLE9BQUQsRUFBYTtJQUN0Q2hCLGNBQWMsQ0FBQ2dCLE9BQUQsQ0FBZDtFQUNILENBRkQ7O0VBSUEsT0FBT0Msa0JBQU1kLGFBQU4sQ0FDSFQsZ0JBREcsRUFFSDtJQUFFd0IsR0FBRyxFQUFFSDtFQUFQLENBRkcsRUFHSGpCLFFBSEcsQ0FBUDtBQUtIIn0=