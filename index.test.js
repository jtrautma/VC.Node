const { test } = require('ava')

const { helloWorld } = require('./index.js')

test('what is truthy', t => {
    t.truthy(true)
    t.truthy('foo')
    t.truthy(1)
    t.truthy(2)
    t.truthy(-1)
    t.truthy(4 + 5)
    t.truthy((4 + 5) == 9)
    t.truthy(4 < 5)
    t.truthy(4 != 5)
    t.truthy(true && true)
    t.truthy(typeof(5) == typeof(9))
    t.truthy("Apple" < "zebra")
})

test('what is not truthy', t => {
    t.falsy(false)
    t.falsy(undefined)
    t.falsy(null)
    t.falsy('')
    t.falsy(0)
    t.falsy((4 + 5) != 9)
    t.falsy(4 > 5)
    t.falsy(false && false)
    t.falsy(typeof("5") == typeof(5))
})

test('Malen nach Zahlen', t => {
    t.deepEqual([1, 2], [1, 2])
})

test('ternary operator', t => {
    const a = 1
    const b = 2

    function foo() {
        return a > b ? 'ist grösser' : 'ist nicht grösser'
    }


    const actual = a > b ? 'ist grösser' : 'ist nicht grösser'
    t.is(actual, 'ist nicht grösser')
})