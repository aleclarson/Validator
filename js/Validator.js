var NamedFunction, Validator, define, isConstructor, mergeDefaults, setType, steal;

require("isDev");

NamedFunction = require("NamedFunction");

isConstructor = require("isConstructor");

setType = require("setType");

steal = require("steal");

mergeDefaults = require("./utils/mergeDefaults");

define = Object.defineProperty;

Validator = NamedFunction("Validator", function(name, config) {
  var self;
  if (arguments.length < 2) {
    config = name || {};
    name = steal(config, "name", "");
  }
  if (!isConstructor(config, Object)) {
    throw TypeError("'config' must be an Object!");
  }
  self = Object.create(Validator.prototype);
  if (isConstructor(name, String)) {
    self.name = name;
    self.getName = function() {
      return name;
    };
  } else if (isConstructor(name, Function)) {
    define(self, "name", {
      get: name
    });
    self.getName = name;
  }
  mergeDefaults(self, config);
  return self;
});

module.exports = Validator;

//# sourceMappingURL=map/Validator.map
