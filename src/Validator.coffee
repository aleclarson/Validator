
NamedFunction = require "NamedFunction"
isConstructor = require "isConstructor"
setType = require "setType"
assert = require "assert"

define = Object.defineProperty

Validator = NamedFunction "Validator", (name, config) ->

  if arguments.length is 1
    config = name
    name = config.name or ""

  assert isConstructor(config, Object), "Must provide a 'config' object!"

  self =
    test: config.test
    assert: config.assert

  if isConstructor name, String
    self.name = name
    self.getName = -> name

  else if isConstructor name, Function
    define self, "name", { get: name }
    self.getName = name

  return setType self, Validator

module.exports = Validator

Object.defineProperties Validator.prototype,

  isRequired:
    get: -> { type: this, required: yes }
    enumerable: yes

  withDefault:
    value: (value) -> { type: this, default: value }
    enumerable: yes
