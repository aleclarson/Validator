var NamedFunction, Validator, assert, define, isConstructor, setType;

NamedFunction = require("NamedFunction");

isConstructor = require("isConstructor");

setType = require("setType");

assert = require("assert");

define = Object.defineProperty;

Validator = NamedFunction("Validator", function(name, config) {
  var self;
  if (arguments.length === 1) {
    config = name;
    name = config.name || "";
  }
  assert(isConstructor(config, Object), "Must provide a 'config' object!");
  self = {
    test: config.test,
    assert: config.assert
  };
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
  return setType(self, Validator);
});

module.exports = Validator;

Object.defineProperties(Validator.prototype, {
  isRequired: {
    get: function() {
      return {
        type: this,
        required: true
      };
    },
    enumerable: true
  },
  withDefault: {
    value: function(value) {
      return {
        type: this,
        "default": value
      };
    },
    enumerable: true
  }
});

//# sourceMappingURL=map/Validator.map
