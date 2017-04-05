
# Validator v1.2.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Used by [`isType`](https://github.com/aleclarson/isType) and [`assertType`](https://github.com/aleclarson/assertType) to support custom validation.

```coffee
Validator = require "Validator"

MyValidator = Validator "MyValidator",

  test: (value) ->
    # Must return a Boolean.

  assert: (value, key) ->
    # Must return a kind of Error, or undefined.
```

Here are some modules that use `Validator()`:
- [Void](https://github.com/aleclarson/Void): Only passes for `undefined`
- [Null](https://github.com/aleclarson/Null): Only passes for `null`
- [PureObject](https://github.com/aleclarson/PureObject): Only passes for `Object.create(null)` instances

### Validator.Type

```coffee
# Use 'Validator.Type' if you need a 'Validator' factory.
# For example, 'ArrayOf' takes advantage of 'Validator.Type'.
MyValidator = Validator.Type "MyValidator",

  init: (args...) ->
    # Initialize the 'Validator' instance in here.

  name: ->
    # Return a String to be used as the validator's display name.

  test: (value) ->
    # This works the same.

  assert: (value, key) ->
    # This works the same.
```

Here are some modules that use `Validator.Type()`:
- [ArrayOf](https://github.com/aleclarson/ArrayOf): Tests the type of each item in an array
- [OneOf](https://github.com/aleclarson/OneOf): Only passes for a specific set of values
- [Shape](https://github.com/aleclarson/Shape): Only passes for objects that match a specific schema
