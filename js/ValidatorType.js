var NamedFunction, Validator, ValidatorType, mergeDefaults, setKind, setType, steal;

NamedFunction = require("NamedFunction");

setKind = require("setKind");

setType = require("setType");

steal = require("steal");

mergeDefaults = require("./utils/mergeDefaults");

Validator = require("./Validator");

ValidatorType = NamedFunction("ValidatorType", function(name, config) {
  var init, type;
  if (arguments.length === 1) {
    config = name;
    name = steal(config, "name", "");
  }
  init = steal(config, "init");
  type = NamedFunction(name, function() {
    var self;
    self = Validator(name, {});
    init && init.apply(self, arguments);
    return setType(self, type);
  });
  mergeDefaults(type.prototype, config);
  setKind(type, Validator);
  return setType(type, ValidatorType);
});

module.exports = setKind(ValidatorType, Function);

//# sourceMappingURL=map/ValidatorType.map
