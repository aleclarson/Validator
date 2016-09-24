
NamedFunction = require "NamedFunction"
isConstructor = require "isConstructor"
setType = require "setType"
isDev = require "isDev"
steal = require "steal"

mergeDefaults = require "./utils/mergeDefaults"

define = Object.defineProperty

Validator = NamedFunction "Validator", (name, config) ->

  if arguments.length < 2
    config = name or {}
    name = steal config, "name", ""

  if not isConstructor config, Object
    throw TypeError "'config' must be an Object!"

  self = Object.create Validator.prototype

  if isConstructor name, String
    self.name = name
    self.getName = -> name

  else if isConstructor name, Function
    define self, "name", { get: name }
    self.getName = name

  mergeDefaults self, config
  return self

module.exports = Validator
