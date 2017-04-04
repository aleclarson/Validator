
NamedFunction = require "NamedFunction"
isConstructor = require "isConstructor"
setType = require "setType"
steal = require "steal"

define = Object.defineProperty

Validator = NamedFunction "Validator", (name, config) ->

  if isConstructor name, Object
    config = name
    name = null

  else if config is undefined
    config = {}

  unless isConstructor config, Object
    throw TypeError "'config' must be an Object!"

  self = Object.create Validator.prototype

  if name or name = steal config, "name"
    if isConstructor name, String
      define self, "displayName", {value: name}
    else if isConstructor name, Function
      define self, "displayName", {get: name}

  for key, value of config
    define self, key, {value, configurable: yes}

  return self

module.exports = Validator
