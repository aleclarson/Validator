
NamedFunction = require "NamedFunction"
setKind = require "setKind"
setType = require "setType"

Validator = require "./Validator"

ValidatorType = NamedFunction "ValidatorType", (name, config) ->

  init = config.init
  delete config.init

  type = NamedFunction name, ->
    self = Validator config
    init and init.apply self, arguments
    return setType self, type

  setKind type, Validator
  return setType type, ValidatorType

module.exports = setKind ValidatorType, Function
