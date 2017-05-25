const {expect} = require('code')
const {describe, before, it} = require('mocha')
const PropTypes = require('../src')

describe('PropTypes should export their type for primitive types', () => {

    ['string', 'bool', 'array', 'func', 'number', 'object', 'symbol']
    .forEach(type => {
        it(`PropType.${type} should export type "${type}"`, (done) => {
            var propType = PropTypes[type]
            expect(propType.type).to.equal(type)

            done()
        })
    })
})
