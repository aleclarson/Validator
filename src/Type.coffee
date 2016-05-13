
NamedFunction = require "NamedFunction"
setKind = require "setKind"
setType = require "setType"
steal = require "steal"

Validator = require "./Validator"

module.exports =
ValidatorType = NamedFunction "ValidatorType", (name, config) ->

  init = steal config, "init"

  validatorType = NamedFunction name, ->
    self = Validator config
    self.validatorType = validatorType
    init.apply self, arguments if init
    return self

  setType validatorType, ValidatorType

setKind ValidatorType, Function
