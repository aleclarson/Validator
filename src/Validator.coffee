
NamedFunction = require "NamedFunction"
isConstructor = require "isConstructor"
setType = require "setType"
assert = require "assert"

define = Object.defineProperty

module.exports =
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

  setType self, Validator
