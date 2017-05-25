const {expect} = require('code')
const {describe, before, it} = require('mocha')
const PropTypes = require('../src')

describe('PropTypes should export their type for required primitive types', () => {

    ['string', 'bool', 'array', 'func', 'number', 'object', 'symbol']
    .forEach(type => {
        it(`PropType.${type}.isRequired should export the required type "${type}"`, (done) => {
            var propType = PropTypes[type].isRequired
            expect(propType.type).to.equal(type)
            expect(propType.required).to.equal(true)

            done()
        })
    })
})
