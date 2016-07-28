
require "isDev"

NamedFunction = require "NamedFunction"
isConstructor = require "isConstructor"
setType = require "setType"
assert = require "assert"
steal = require "steal"

mergeDefaults = require "./utils/mergeDefaults"

define = Object.defineProperty

Validator = NamedFunction "Validator", (name, config) ->

  if arguments.length < 2
    config = name or {}
    name = steal config, "name", ""

  assert isConstructor(config, Object), "Must provide a 'config' object!"

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

define Validator.prototype, "isRequired",
  get: -> { type: this, required: yes }
  enumerable: yes

define Validator.prototype, "withDefault",
  value: (value) -> { type: this, default: value }
  enumerable: yes
