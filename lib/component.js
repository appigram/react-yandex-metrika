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
    insertPoint === null || insertPoint === void 0 ? void 0 : insertPoint.insertBefore(el, null);
  }, [insertPoint]);
  var handleSetInsertPoint = function handleSetInsertPoint(element) {
    setInsertPoint(element);
  };
  return _react["default"].createElement(containerElement, {
    ref: handleSetInsertPoint
  }, children);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwibmFtZXMiOlsiWU1Jbml0aWFsaXplciIsImFjY291bnRzIiwiY29udGFpbmVyRWxlbWVudCIsIm9wdGlvbnMiLCJhdHRycyIsInZlcnNpb24iLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiaW5zZXJ0UG9pbnQiLCJzZXRJbnNlcnRQb2ludCIsInVzZUVmZmVjdCIsImluaXQiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsInNjcmlwdFBhdGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaSIsIl9fcHJvdG9fXyIsImhhc093blByb3BlcnR5Iiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0QmVmb3JlIiwiaGFuZGxlU2V0SW5zZXJ0UG9pbnQiLCJlbGVtZW50IiwiUmVhY3QiLCJyZWYiXSwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBzY3JpcHRQYXRoIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBZTUluaXRpYWxpemVyKHtcbiAgICBhY2NvdW50cyA9IFtdLFxuICAgIGNvbnRhaW5lckVsZW1lbnQgPSAnZGl2JyxcbiAgICBvcHRpb25zID0ge30sXG4gICAgYXR0cnMgPSB7fSxcbiAgICB2ZXJzaW9uID0gJzEnLFxuICAgIGNoaWxkcmVuXG59KSB7XG4gICAgY29uc3QgW2luc2VydFBvaW50LCBzZXRJbnNlcnRQb2ludF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW5pdChhY2NvdW50cywgb3B0aW9ucywgdmVyc2lvbik7XG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIGVsLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZWwuc3JjID0gc2NyaXB0UGF0aCh2ZXJzaW9uKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLm1hcChpID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5fX3Byb3RvX18uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaSwgYXR0cnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5zZXJ0UG9pbnQ/Lmluc2VydEJlZm9yZShlbCwgbnVsbCk7XG4gICAgfSwgW2luc2VydFBvaW50XSk7XG5cbiAgICBjb25zdCBoYW5kbGVTZXRJbnNlcnRQb2ludCA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIHNldEluc2VydFBvaW50KGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgY29udGFpbmVyRWxlbWVudCxcbiAgICAgICAgeyByZWY6IGhhbmRsZVNldEluc2VydFBvaW50IH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgKTtcbn1cblxuZXhwb3J0IHsgWU1Jbml0aWFsaXplciB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFlBQVk7O0FBQUM7QUFBQTtFQUFBO0FBQUE7QUFBQTtBQUViO0FBQ0E7QUFDQTtBQUF5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFekMsU0FBU0EsYUFBYSxPQU9uQjtFQUFBLHlCQU5DQyxRQUFRO0lBQVJBLFFBQVEsOEJBQUcsRUFBRTtJQUFBLDZCQUNiQyxnQkFBZ0I7SUFBaEJBLGdCQUFnQixzQ0FBRyxLQUFLO0lBQUEsb0JBQ3hCQyxPQUFPO0lBQVBBLE9BQU8sNkJBQUcsQ0FBQyxDQUFDO0lBQUEsa0JBQ1pDLEtBQUs7SUFBTEEsS0FBSywyQkFBRyxDQUFDLENBQUM7SUFBQSxvQkFDVkMsT0FBTztJQUFQQSxPQUFPLDZCQUFHLEdBQUc7SUFDYkMsUUFBUSxRQUFSQSxRQUFRO0VBRVIsZ0JBQXNDLElBQUFDLGVBQVEsR0FBRTtJQUFBO0lBQXpDQyxXQUFXO0lBQUVDLGNBQWM7RUFFbEMsSUFBQUMsZ0JBQVMsRUFBQyxZQUFNO0lBQ1osSUFBQUMsZ0JBQUksRUFBQ1YsUUFBUSxFQUFFRSxPQUFPLEVBQUVFLE9BQU8sQ0FBQztJQUNoQyxJQUFJTyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN6Q0YsRUFBRSxDQUFDRyxJQUFJLEdBQUcsaUJBQWlCO0lBQzNCSCxFQUFFLENBQUNJLEtBQUssR0FBRyxJQUFJO0lBQ2ZKLEVBQUUsQ0FBQ0ssR0FBRyxHQUFHLElBQUFDLHFCQUFVLEVBQUNiLE9BQU8sQ0FBQztJQUM1QmMsTUFBTSxDQUFDQyxJQUFJLENBQUNoQixLQUFLLENBQUMsQ0FBQ2lCLEdBQUcsQ0FBQyxVQUFBQyxDQUFDLEVBQUk7TUFDeEIsSUFBSVYsRUFBRSxDQUFDVyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0YsQ0FBQyxDQUFDLEVBQUU7UUFDaENWLEVBQUUsQ0FBQ2EsWUFBWSxDQUFDSCxDQUFDLEVBQUVsQixLQUFLLENBQUNrQixDQUFDLENBQUMsQ0FBQztNQUNoQztJQUNKLENBQUMsQ0FBQztJQUNGZCxXQUFXLGFBQVhBLFdBQVcsdUJBQVhBLFdBQVcsQ0FBRWtCLFlBQVksQ0FBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQztFQUN2QyxDQUFDLEVBQUUsQ0FBQ0osV0FBVyxDQUFDLENBQUM7RUFFakIsSUFBTW1CLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0IsQ0FBSUMsT0FBTyxFQUFLO0lBQ3RDbkIsY0FBYyxDQUFDbUIsT0FBTyxDQUFDO0VBQzNCLENBQUM7RUFFRCxPQUFPQyxpQkFBSyxDQUFDZixhQUFhLENBQ3RCWixnQkFBZ0IsRUFDaEI7SUFBRTRCLEdBQUcsRUFBRUg7RUFBcUIsQ0FBQyxFQUM3QnJCLFFBQVEsQ0FDWDtBQUNMIn0=