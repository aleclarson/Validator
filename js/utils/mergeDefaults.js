var define, mergeDefaults;

define = Object.defineProperty;

mergeDefaults = function(obj, defaults) {
  var key, value;
  for (key in defaults) {
    value = defaults[key];
    if (obj[key] !== void 0) {
      continue;
    }
    if (isDev && key.startsWith("_")) {
      define(obj, key, {
        value: value
      });
    } else {
      obj[key] = value;
    }
  }
};

module.exports = mergeDefaults;

//# sourceMappingURL=map/mergeDefaults.map
