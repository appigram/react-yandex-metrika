/* eslint-env browser */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "YMInitializer", {
  enumerable: true,
  get: function get() {
    return _component.YMInitializer;
  }
});
exports["default"] = void 0;
exports.withFilter = withFilter;
exports.withId = withId;
var _constants = require("./constants");
var _component = require("./component");
function ymProxy(id, methodName) {
  try {
    var _window$trackerInstan;
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    (_window$trackerInstan = window[(0, _constants.trackerInstanceName)(id)])[methodName].apply(_window$trackerInstan, args);
  } catch (ex) {
    console.warn(ex);
  }
}
function accountIdList() {
  return typeof window !== 'undefined' ? window[_constants.accountListName] : [];
}
function ymAsyncProxy(ids) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    ids.forEach(function (id) {
      var trackerVersion = window[(0, _constants.trackerVersionName)(id)];
      var callbackQueue = window[(0, _constants.callbackQueueName)(trackerVersion)];
      if (callbackQueue) {
        callbackQueue.push(function () {
          return ymProxy.apply(void 0, [id].concat(args));
        });
      } else {
        ymProxy.apply(void 0, [id].concat(args));
      }
    });
  };
}
function ym() {
  return ymAsyncProxy(accountIdList()).apply(void 0, arguments);
}
function withId(counterId) {
  return withFilter(function (id) {
    return counterId === id;
  });
}
function withFilter(f) {
  return ymAsyncProxy(accountIdList().filter(f));
}
var _default = ym;
exports["default"] = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6WyJ5bVByb3h5IiwiaWQiLCJtZXRob2ROYW1lIiwiYXJncyIsIndpbmRvdyIsInRyYWNrZXJJbnN0YW5jZU5hbWUiLCJleCIsImNvbnNvbGUiLCJ3YXJuIiwiYWNjb3VudElkTGlzdCIsImFjY291bnRMaXN0TmFtZSIsInltQXN5bmNQcm94eSIsImlkcyIsImZvckVhY2giLCJ0cmFja2VyVmVyc2lvbiIsInRyYWNrZXJWZXJzaW9uTmFtZSIsImNhbGxiYWNrUXVldWUiLCJjYWxsYmFja1F1ZXVlTmFtZSIsInB1c2giLCJ5bSIsIndpdGhJZCIsImNvdW50ZXJJZCIsIndpdGhGaWx0ZXIiLCJmIiwiZmlsdGVyIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1xuICAgIGFjY291bnRMaXN0TmFtZSxcbiAgICBjYWxsYmFja1F1ZXVlTmFtZSxcbiAgICB0cmFja2VySW5zdGFuY2VOYW1lLFxuICAgIHRyYWNrZXJWZXJzaW9uTmFtZVxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIHltUHJveHkoaWQsIG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICB3aW5kb3dbdHJhY2tlckluc3RhbmNlTmFtZShpZCldW21ldGhvZE5hbWVdKC4uLmFyZ3MpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihleCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY2NvdW50SWRMaXN0KCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1thY2NvdW50TGlzdE5hbWVdIDogW107XG59XG5cbmZ1bmN0aW9uIHltQXN5bmNQcm94eShpZHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgbGV0IHRyYWNrZXJWZXJzaW9uID0gd2luZG93W3RyYWNrZXJWZXJzaW9uTmFtZShpZCldO1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrUXVldWUgPSB3aW5kb3dbY2FsbGJhY2tRdWV1ZU5hbWUodHJhY2tlclZlcnNpb24pXTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja1F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tRdWV1ZS5wdXNoKCgpID0+IHltUHJveHkoaWQsIC4uLmFyZ3MpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeW1Qcm94eShpZCwgLi4uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHltKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4geW1Bc3luY1Byb3h5KGFjY291bnRJZExpc3QoKSkoLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoSWQoY291bnRlcklkKSB7XG4gICAgcmV0dXJuIHdpdGhGaWx0ZXIoaWQgPT4gY291bnRlcklkID09PSBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoRmlsdGVyKGYpIHtcbiAgICByZXR1cm4geW1Bc3luY1Byb3h5KGFjY291bnRJZExpc3QoKS5maWx0ZXIoZikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB5bTtcbmV4cG9ydCB7IFlNSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWTs7QUFBQztFQUFBO0FBQUE7QUFBQTtFQUFBO0VBQUE7SUFBQTtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFYjtBQThDQTtBQXZDQSxTQUFTQSxPQUFPLENBQUNDLEVBQUUsRUFBRUMsVUFBVSxFQUFXO0VBQ3RDLElBQUk7SUFBQTtJQUFBLGtDQUQ0QkMsSUFBSTtNQUFKQSxJQUFJO0lBQUE7SUFFaEMseUJBQUFDLE1BQU0sQ0FBQyxJQUFBQyw4QkFBbUIsRUFBQ0osRUFBRSxDQUFDLENBQUMsRUFBQ0MsVUFBVSxDQUFDLDhCQUFJQyxJQUFJLENBQUM7RUFDeEQsQ0FBQyxDQUFDLE9BQU9HLEVBQUUsRUFBRTtJQUNUQyxPQUFPLENBQUNDLElBQUksQ0FBQ0YsRUFBRSxDQUFDO0VBQ3BCO0FBQ0o7QUFFQSxTQUFTRyxhQUFhLEdBQUc7RUFDckIsT0FBTyxPQUFPTCxNQUFNLEtBQUssV0FBVyxHQUFHQSxNQUFNLENBQUNNLDBCQUFlLENBQUMsR0FBRyxFQUFFO0FBQ3ZFO0FBRUEsU0FBU0MsWUFBWSxDQUFDQyxHQUFHLEVBQUU7RUFDdkIsT0FBTyxZQUFtQjtJQUFBLG1DQUFOVCxJQUFJO01BQUpBLElBQUk7SUFBQTtJQUNwQlMsR0FBRyxDQUFDQyxPQUFPLENBQUMsVUFBQVosRUFBRSxFQUFJO01BQ2QsSUFBSWEsY0FBYyxHQUFHVixNQUFNLENBQUMsSUFBQVcsNkJBQWtCLEVBQUNkLEVBQUUsQ0FBQyxDQUFDO01BQ25ELElBQUllLGFBQWEsR0FBR1osTUFBTSxDQUFDLElBQUFhLDRCQUFpQixFQUFDSCxjQUFjLENBQUMsQ0FBQztNQUM3RCxJQUFJRSxhQUFhLEVBQUU7UUFDZkEsYUFBYSxDQUFDRSxJQUFJLENBQUM7VUFBQSxPQUFNbEIsT0FBTyxnQkFBQ0MsRUFBRSxTQUFLRSxJQUFJLEVBQUM7UUFBQSxFQUFDO01BQ2xELENBQUMsTUFBTTtRQUNISCxPQUFPLGdCQUFDQyxFQUFFLFNBQUtFLElBQUksRUFBQztNQUN4QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7QUFDTDtBQUVBLFNBQVNnQixFQUFFLEdBQVU7RUFDakIsT0FBT1IsWUFBWSxDQUFDRixhQUFhLEVBQUUsQ0FBQyx5QkFBUztBQUNqRDtBQUVPLFNBQVNXLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFO0VBQzlCLE9BQU9DLFVBQVUsQ0FBQyxVQUFBckIsRUFBRTtJQUFBLE9BQUlvQixTQUFTLEtBQUtwQixFQUFFO0VBQUEsRUFBQztBQUM3QztBQUVPLFNBQVNxQixVQUFVLENBQUNDLENBQUMsRUFBRTtFQUMxQixPQUFPWixZQUFZLENBQUNGLGFBQWEsRUFBRSxDQUFDZSxNQUFNLENBQUNELENBQUMsQ0FBQyxDQUFDO0FBQ2xEO0FBQUMsZUFFY0osRUFBRTtBQUFBIn0=