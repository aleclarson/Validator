var NamedFunction, Validator, ValidatorType, mergeDefaults, setKind, setType, steal;

NamedFunction = require("NamedFunction");

setKind = require("setKind");

setType = require("setType");

steal = require("steal");

mergeDefaults = require("./utils/mergeDefaults");

Validator = require("./Validator");

ValidatorType = NamedFunction("ValidatorType", function(name, config) {
  var getName, init, type;
  init = steal(config, "init");
  getName = steal(config, "name", function() {
    return name;
  });
  type = NamedFunction(name, function() {
    var self;
    self = Validator({
      name: getName
    });
    init && init.apply(self, arguments);
    return setType(self, type);
  });
  mergeDefaults(type.prototype, config);
  setKind(type, Validator);
  return setType(type, ValidatorType);
});

module.exports = setKind(ValidatorType, Function);

//# sourceMappingURL=map/ValidatorType.map
