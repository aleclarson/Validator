
NamedFunction = require "NamedFunction"
isConstructor = require "isConstructor"
setType = require "setType"
assert = require "assert"

module.exports =
Validator = NamedFunction "Validator", (name, config) ->

  assert isConstructor(name, String), "Must provide a 'name' string!"
  assert isConstructor(config, Object), "Must provide a 'config' object!"

  self =
    test: config.test
    assert: config.assert

  defineName.call self, name or config.name

  setType self, Validator

define = Object.defineProperty
defineName = (name) ->
  return unless name
  if isConstructor name, String
    @name = name
  else if isConstructor name, Function
    define this, "_name", { value: name }

define Validator.prototype, "name",
  get: -> @_name.call this
  enumerable: yes

Validator::test = (value) ->
  return @_config.test.call this, value

Validator::assert = (value, key) ->
  return @_config.assert.call this, value, key
