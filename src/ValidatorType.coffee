
NamedFunction = require "NamedFunction"
setKind = require "setKind"
setType = require "setType"
steal = require "steal"

mergeDefaults = require "./utils/mergeDefaults"
Validator = require "./Validator"

ValidatorType = NamedFunction "ValidatorType", (name, config) ->

  init = steal config, "init"
  getName = steal config, "name", -> name

  type = NamedFunction name, ->

    self = Validator { name: getName }

    init and init.apply self, arguments

    setType self, type

  mergeDefaults type.prototype, config

  setKind type, Validator

  setType type, ValidatorType

module.exports = setKind ValidatorType, Function
