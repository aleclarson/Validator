var NamedFunction, Validator, ValidatorType, setKind, setType;

NamedFunction = require("NamedFunction");

setKind = require("setKind");

setType = require("setType");

Validator = require("./Validator");

ValidatorType = NamedFunction("ValidatorType", function(name, config) {
  var init, type;
  init = config.init;
  delete config.init;
  type = NamedFunction(name, function() {
    var self;
    self = Validator(config);
    init && init.apply(self, arguments);
    return setType(self, type);
  });
  setKind(type, Validator);
  return setType(type, ValidatorType);
});

module.exports = setKind(ValidatorType, Function);

//# sourceMappingURL=map/ValidatorType.map
