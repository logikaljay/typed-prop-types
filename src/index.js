const PropTypes = require('prop-types')

for (var key in PropTypes) {
  if (typeof PropTypes[key] === 'function') {
    const originalFunc = PropTypes[key]

    PropTypes[key] = (...params) => {
      const result = originalFunc.call(false, ...params)
      result.type = key === 'instanceOf' ? params[0] : key
      result.options = params[0]
      result.required = false
      return result
    }

    PropTypes[key].isRequired = (...params) =>
      originalFunc.call(true, ...params)
  }

  PropTypes[key].type = key
  PropTypes[key].required = false

  if (PropTypes[key].hasOwnProperty('isRequired')) {
    PropTypes[key].isRequired.type = key
    PropTypes[key].isRequired.required = true
  }
}

module.exports = PropTypes
