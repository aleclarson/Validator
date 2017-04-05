
NamedFunction = require "NamedFunction"
setKind = require "setKind"
setType = require "setType"
steal = require "steal"

Validator = require "./Validator"

define = Object.defineProperty

ValidatorType = NamedFunction "ValidatorType", (name, config) ->

  init = steal config, "init"
  displayName = steal config, "name"

  type = NamedFunction name, ->
    self = Validator displayName
    init and init.apply self, arguments
    return setType self, type

  # Merge the remaining properties into the prototype.
  for key, value of config
    define type.prototype, key, {value, configurable: yes}

  setKind type, Validator
  return setType type, ValidatorType

module.exports = setKind ValidatorType, Function
