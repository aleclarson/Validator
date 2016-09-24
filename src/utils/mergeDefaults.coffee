
isDev = require "isDev"

define = Object.defineProperty

mergeDefaults = (obj, defaults) ->
  for key, value of defaults
    continue if obj[key] isnt undefined
    if isDev and key.startsWith "_"
      define obj, key, { value }
    else obj[key] = value
  return

module.exports = mergeDefaults
