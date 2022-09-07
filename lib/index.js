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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6WyJ5bVByb3h5IiwiaWQiLCJtZXRob2ROYW1lIiwiYXJncyIsIndpbmRvdyIsInRyYWNrZXJJbnN0YW5jZU5hbWUiLCJleCIsImNvbnNvbGUiLCJ3YXJuIiwiYWNjb3VudElkTGlzdCIsImFjY291bnRMaXN0TmFtZSIsInltQXN5bmNQcm94eSIsImlkcyIsImZvckVhY2giLCJ0cmFja2VyVmVyc2lvbiIsInRyYWNrZXJWZXJzaW9uTmFtZSIsImNhbGxiYWNrUXVldWUiLCJjYWxsYmFja1F1ZXVlTmFtZSIsInB1c2giLCJ5bSIsIndpdGhJZCIsImNvdW50ZXJJZCIsIndpdGhGaWx0ZXIiLCJmIiwiZmlsdGVyIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1xuICAgIGFjY291bnRMaXN0TmFtZSxcbiAgICBjYWxsYmFja1F1ZXVlTmFtZSxcbiAgICB0cmFja2VySW5zdGFuY2VOYW1lLFxuICAgIHRyYWNrZXJWZXJzaW9uTmFtZVxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIHltUHJveHkoaWQsIG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICB3aW5kb3dbdHJhY2tlckluc3RhbmNlTmFtZShpZCldW21ldGhvZE5hbWVdKC4uLmFyZ3MpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihleCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY2NvdW50SWRMaXN0KCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1thY2NvdW50TGlzdE5hbWVdIDogW107XG59XG5cbmZ1bmN0aW9uIHltQXN5bmNQcm94eShpZHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgbGV0IHRyYWNrZXJWZXJzaW9uID0gd2luZG93W3RyYWNrZXJWZXJzaW9uTmFtZShpZCldO1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrUXVldWUgPSB3aW5kb3dbY2FsbGJhY2tRdWV1ZU5hbWUodHJhY2tlclZlcnNpb24pXTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja1F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tRdWV1ZS5wdXNoKCgpID0+IHltUHJveHkoaWQsIC4uLmFyZ3MpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeW1Qcm94eShpZCwgLi4uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHltKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4geW1Bc3luY1Byb3h5KGFjY291bnRJZExpc3QoKSkoLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoSWQoY291bnRlcklkKSB7XG4gICAgcmV0dXJuIHdpdGhGaWx0ZXIoaWQgPT4gY291bnRlcklkID09PSBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoRmlsdGVyKGYpIHtcbiAgICByZXR1cm4geW1Bc3luY1Byb3h5KGFjY291bnRJZExpc3QoKS5maWx0ZXIoZikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB5bTtcbmV4cG9ydCB7IFlNSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQThDQTs7QUF2Q0EsU0FBU0EsT0FBVCxDQUFpQkMsRUFBakIsRUFBcUJDLFVBQXJCLEVBQTBDO0VBQ3RDLElBQUk7SUFBQTs7SUFBQSxrQ0FENEJDLElBQzVCO01BRDRCQSxJQUM1QjtJQUFBOztJQUNBLHlCQUFBQyxNQUFNLENBQUMsSUFBQUMsOEJBQUEsRUFBb0JKLEVBQXBCLENBQUQsQ0FBTixFQUFnQ0MsVUFBaEMsK0JBQStDQyxJQUEvQztFQUNILENBRkQsQ0FFRSxPQUFPRyxFQUFQLEVBQVc7SUFDVEMsT0FBTyxDQUFDQyxJQUFSLENBQWFGLEVBQWI7RUFDSDtBQUNKOztBQUVELFNBQVNHLGFBQVQsR0FBeUI7RUFDckIsT0FBTyxPQUFPTCxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFNLENBQUNNLDBCQUFELENBQXRDLEdBQTBELEVBQWpFO0FBQ0g7O0FBRUQsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkI7RUFDdkIsT0FBTyxZQUFtQjtJQUFBLG1DQUFOVCxJQUFNO01BQU5BLElBQU07SUFBQTs7SUFDdEJTLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLFVBQUFaLEVBQUUsRUFBSTtNQUNkLElBQUlhLGNBQWMsR0FBR1YsTUFBTSxDQUFDLElBQUFXLDZCQUFBLEVBQW1CZCxFQUFuQixDQUFELENBQTNCO01BQ0EsSUFBSWUsYUFBYSxHQUFHWixNQUFNLENBQUMsSUFBQWEsNEJBQUEsRUFBa0JILGNBQWxCLENBQUQsQ0FBMUI7O01BQ0EsSUFBSUUsYUFBSixFQUFtQjtRQUNmQSxhQUFhLENBQUNFLElBQWQsQ0FBbUI7VUFBQSxPQUFNbEIsT0FBTyxNQUFQLFVBQVFDLEVBQVIsU0FBZUUsSUFBZixFQUFOO1FBQUEsQ0FBbkI7TUFDSCxDQUZELE1BRU87UUFDSEgsT0FBTyxNQUFQLFVBQVFDLEVBQVIsU0FBZUUsSUFBZjtNQUNIO0lBQ0osQ0FSRDtFQVNILENBVkQ7QUFXSDs7QUFFRCxTQUFTZ0IsRUFBVCxHQUFxQjtFQUNqQixPQUFPUixZQUFZLENBQUNGLGFBQWEsRUFBZCxDQUFaLHlCQUFQO0FBQ0g7O0FBRU0sU0FBU1csTUFBVCxDQUFnQkMsU0FBaEIsRUFBMkI7RUFDOUIsT0FBT0MsVUFBVSxDQUFDLFVBQUFyQixFQUFFO0lBQUEsT0FBSW9CLFNBQVMsS0FBS3BCLEVBQWxCO0VBQUEsQ0FBSCxDQUFqQjtBQUNIOztBQUVNLFNBQVNxQixVQUFULENBQW9CQyxDQUFwQixFQUF1QjtFQUMxQixPQUFPWixZQUFZLENBQUNGLGFBQWEsR0FBR2UsTUFBaEIsQ0FBdUJELENBQXZCLENBQUQsQ0FBbkI7QUFDSDs7ZUFFY0osRSJ9