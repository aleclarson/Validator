var NamedFunction, Validator, assert, define, isConstructor, mergeDefaults, setType, steal;

require("isDev");

NamedFunction = require("NamedFunction");

isConstructor = require("isConstructor");

setType = require("setType");

assert = require("assert");

steal = require("steal");

mergeDefaults = require("./utils/mergeDefaults");

define = Object.defineProperty;

Validator = NamedFunction("Validator", function(name, config) {
  var self;
  if (arguments.length === 1) {
    config = name;
    name = steal(config, "name", "");
  }
  assert(isConstructor(config, Object), "Must provide a 'config' object!");
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

define(Validator.prototype, "isRequired", {
  get: function() {
    return {
      type: this,
      required: true
    };
  },
  enumerable: true
});

define(Validator.prototype, "withDefault", {
  value: function(value) {
    return {
      type: this,
      "default": value
    };
  },
  enumerable: true
});

//# sourceMappingURL=map/Validator.map
