# Typed Prop Types

Given a React Component with required props, if you wanted to build an interface to populate those props, the only way to figure out what type the prop requires is by constantly calling `PropTypes.checkPropTypes()` with the prop and iterate over different prop types until you do not receive an error. This is not ideal.

So I created this wrapper that injects the type, and any parameters as options as properties on to the type that is returned.

## Examples

### `PropTypes.string`
```js
const PropTypes = require('typed-prop-types')

var stringType = PropTypes.string

console.log(stringType)

/*
  Outputs:
    { [Function]
      isRequired: { [Function] type: 'string', required: true },
      type: 'string',
      required: false }
*/
```

You will see that the default `prop-types` type checker is still returned as an anonymous function, just like it always is, but I have added `type` and `required` properties.

### `PropTypes.oneOf`

```js
const PropTypes = require('typed-prop-types')

var colourType = PropTypes.oneOf(['apple', 'orange', 'banana'])

console.log(colourType)

/*
  Outputs:
    { [Function: bound checkType]
      isRequired: [Function: bound checkType],
      type: 'oneOf',
      options: [ 'apple', 'orange', 'banana' ],
      required: false }
*/
```

You will see that now there is an `options` property that list required options for this prop. This is useful for populating a dropdown or a radio button list.


## Tests

```text
$ yarn test-cov
yarn test-cov v0.21.3
$ ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- -R spec


  PropTypes hould export their type for non primitive types
    ✓ PropTypes.oneOf should export type "oneOf"
    ✓ PropTypes.node should export type "node"
    ✓ PropTypes.element should export type "element"
    ✓ PropTypes.instanceOf should export the type of the class
    ✓ PropTypes.oneOfType should export the type "oneOfType" with options of the types
    ✓ PropTypes.objectOf should export the type "objectOf" with the options of the property type
    ✓ PropTypes.arrayOf should export the type "arrayOf" with the options of the array value type
    ✓ PropTypes.shape should export the type "shape" with the options of the shape detail

  PropTypes should export their type for primitive types
    ✓ PropType.string should export type "string"
    ✓ PropType.bool should export type "bool"
    ✓ PropType.array should export type "array"
    ✓ PropType.func should export type "func"
    ✓ PropType.number should export type "number"
    ✓ PropType.object should export type "object"
    ✓ PropType.symbol should export type "symbol"

  PropTypes should export their type for required primitive types
    ✓ PropType.string.isRequired should export the required type "string"
    ✓ PropType.bool.isRequired should export the required type "bool"
    ✓ PropType.array.isRequired should export the required type "array"
    ✓ PropType.func.isRequired should export the required type "func"
    ✓ PropType.number.isRequired should export the required type "number"
    ✓ PropType.object.isRequired should export the required type "object"
    ✓ PropType.symbol.isRequired should export the required type "symbol"


  22 passing (28ms)

=============================== Coverage summary ===============================
Statements   : 94.44% ( 17/18 )
Branches     : 100% ( 6/6 )
Functions    : 100% ( 0/0 )
Lines        : 100% ( 17/17 )
================================================================================
✨  Done in 0.55s.
```