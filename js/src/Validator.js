var NamedFunction, Validator, assert, define, defineName, isConstructor, setType;

NamedFunction = require("NamedFunction");

isConstructor = require("isConstructor");

setType = require("setType");

assert = require("assert");

module.exports = Validator = NamedFunction("Validator", function(name, config) {
  var self;
  assert(isConstructor(name, String), "Must provide a 'name' string!");
  assert(isConstructor(config, Object), "Must provide a 'config' object!");
  self = {
    test: config.test,
    assert: config.assert
  };
  defineName.call(self, name || config.name);
  return setType(self, Validator);
});

define = Object.defineProperty;

defineName = function(name) {
  if (!name) {
    return;
  }
  if (isConstructor(name, String)) {
    return this.name = name;
  } else if (isConstructor(name, Function)) {
    return define(this, "_name", {
      value: name
    });
  }
};

define(Validator.prototype, "name", {
  get: function() {
    return this._name.call(this);
  },
  enumerable: true
});

Validator.prototype.test = function(value) {
  return this._config.test.call(this, value);
};

Validator.prototype.assert = function(value, key) {
  return this._config.assert.call(this, value, key);
};

//# sourceMappingURL=../../map/src/Validator.map
