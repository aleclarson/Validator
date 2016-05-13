var NamedFunction, Validator, ValidatorType, setKind, setType, steal;

NamedFunction = require("NamedFunction");

setKind = require("setKind");

setType = require("setType");

steal = require("steal");

Validator = require("./Validator");

module.exports = ValidatorType = NamedFunction("ValidatorType", function(name, config) {
  var init, validatorType;
  init = steal(config, "init");
  validatorType = NamedFunction(name, function() {
    var self;
    self = Validator(config);
    self.validatorType = validatorType;
    if (init) {
      init.apply(self, arguments);
    }
    return self;
  });
  return setType(validatorType, ValidatorType);
});

setKind(ValidatorType, Function);

//# sourceMappingURL=../../map/src/Type.map
