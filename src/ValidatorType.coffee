
NamedFunction = require "NamedFunction"
setKind = require "setKind"
setType = require "setType"
steal = require "steal"

mergeDefaults = require "./utils/mergeDefaults"
Validator = require "./Validator"

ValidatorType = NamedFunction "ValidatorType", (name, config) ->

  if arguments.length is 1
    config = name
    name = steal config, "name", ""

  init = steal config, "init"

  type = NamedFunction name, ->

    self = Validator name, {}

    init and init.apply self, arguments

    setType self, type

  mergeDefaults type.prototype, config

  setKind type, Validator

  setType type, ValidatorType

module.exports = setKind ValidatorType, Function
