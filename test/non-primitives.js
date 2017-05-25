const {expect} = require('code')
const {describe, before, it} = require('mocha')
const PropTypes = require('../src')

describe('PropTypes hould export their type for non primitive types', () => {
    it('PropTypes.oneOf should export type "oneOf"', (done) => {
        var propType = PropTypes.oneOf(['foo', 'bar'])
        expect(propType.type).to.equal('oneOf')

        done()
    })

    it('PropTypes.node should export type "node"', (done) => {
        var propType = PropTypes.node
        expect(propType.type).to.equal('node')
        done()
    })

    it('PropTypes.element should export type "element"', (done) => {
        var propType = PropTypes.element
        expect(propType.type).to.equal('element')
        done()
    })

    it('PropTypes.instanceOf should export the type of the class', (done) => {
        class Foo {}
        var propType = PropTypes.instanceOf(Foo)
        expect(propType.type).to.equal(Foo)
        done()
    })

    it('PropTypes.oneOfType should export the type "oneOfType" with options of the types', (done) => {
        class Foo {}
        var types = [
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Foo)
        ]

        var propType = PropTypes.oneOfType(types)
        expect(propType.type).to.equal('oneOfType')
        expect(propType.options).to.equal(types)
        expect(propType.options.indexOf(PropTypes.number)).to.equal(1)
        done()
    })

    it('PropTypes.objectOf should export the type "objectOf" with the options of the property type', (done) => {
        var propType = PropTypes.objectOf(PropTypes.number)
        expect(propType.type).to.equal('objectOf')
        expect(propType.options).to.equal(PropTypes.number)
        expect(propType.options.type).to.equal('number')
        done()
    })

    it('PropTypes.arrayOf should export the type "arrayOf" with the options of the array value type', (done) => {
        var propType = PropTypes.arrayOf(PropTypes.number)
        expect(propType.type).to.equal('arrayOf')
        expect(propType.options).to.equal(PropTypes.number)
        expect(propType.options.type).to.equal('number')
        done()
    })

    it('PropTypes.shape should export the type "shape" with the options of the shape detail', (done) => {
        var shape = {
            color: PropTypes.string,
            fontSize: PropTypes.number
        }

        var propTypes = PropTypes.shape(shape)
        expect(propTypes.type).to.equal('shape')
        expect(propTypes.options).to.equal(shape)
        expect(propTypes.options.color.type).to.equal('string')
        expect(propTypes.options.fontSize.type).to.equal('number')
        done()
    })
})
