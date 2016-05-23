
NamedFunction = require "NamedFunction"
setKind = require "setKind"
setType = require "setType"

Validator = require "./Validator"

module.exports =
ValidatorType = NamedFunction "ValidatorType", (name, config) ->

  init = config.init
  delete config.init

  validatorType = NamedFunction name, ->
    self = Validator config
    self.validatorType = validatorType
    init.apply self, arguments if init
    return self

  setType validatorType, ValidatorType

setKind ValidatorType, Function
