
# Validator 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Used by [`isType`](https://github.com/aleclarson/isType) and [`assertType`](https://github.com/aleclarson/assertType) to support custom validation.

```coffee
Validator = require "Validator"

MyValidator = Validator "MyValidator",

  test: (value) ->
    # Must return a Boolean.

  assert: (value, key) ->
    # Must return a kind of Error, or undefined.
    # You can also return an Object shaped like { error, meta }
    # with the 'meta' property being an Object that contains
    # values relevant to the failed assertion.

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

Look at [`ArrayOf`](https://github.com/aleclarson/ArrayOf) as an example.
