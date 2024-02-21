//1.counter

//первый
const counter1 = {
    count: 0,
}
console.log(counter1)

//второй
const counter2 = new Object()
counter2.count = 0
console.log(counter2)

//третий
function Counter() {
    this.count = 0
}
const counter3 = new Counter()
counter3.count = 0
console.log(counter3)

//четвертый
class Counter {
    constructor() {
        this.count = 0
    }
}
const counter4 = new Counter()
console.log(counter4)

//пятый
const counter5 = Object.create({})
counter5.count = 0
console.log(counter5)

//шестой
let counter6 = Object.assign(
    {count: 0}
)
console.log(counter6)

//2.copy

const counter = {
    count: 0,
}

//первый
const copy1 = {...counter}
console.log(copy1 === counter)

//второй
const copy2 = Object.assign({}, counter)
console.log(copy2 === counter)

//третий
const copy3 = Object.create(counter)
console.log(copy3 === counter)

//четвертый
import cloneDeep from 'lodash.clonedeep'
const copy4 = cloneDeep(counter)
console.log(copy4 === counter)

//пятый
const copy5 = JSON.parse(JSON.stringify(counter))
console.log(copy5 === counter)

//шестой
const copy6 = structuredClone(counter)
console.log(copy6 === counter)

//седьмой
const copy = (obj) => {
    let clone = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        let value = obj[key]
        clone[key] = (value instanceof Object) ? copy(value) : value
    }
    return clone
}
const copy7 = copy(counter)
console.log(copy7 === counter)

//3.makeCounter()

// первый

function makeCounter1() {
    let count = 0
    return () => {
        return count++
    }
}

//второй

const makeCounter2 = function () {
    let count = 0
    return () => {
        return count++
    }
}

//третий

const makeCounter3 = () => {
    let count = 0
    return () => {
        return count++
    }
}

//четвертый

function makeCounter4() {
    function Counter() {
        this.count = 0
    }
    return new Counter()
}

//пятый

const makeCounter5 = (function () {
    let count = 0
    return () => {
        return count++
    }
})()

//advanced

//1)
const reverseStr = (str) => str.split('').reverse().join('')
console.log(reverseStr("Hello World"))

//2)
const obj1 = {here: {is: 'on', other: '3'}, object: "Z"}
const obj2 = {here: {is: 'on', other: '2'}, object: "Z"}

const deepEqual = (obj1, obj2) => {
    let a = Object.keys(obj1)
    let b = Object.keys(obj2)
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return false
    if(obj1 === null || obj2 === null) return false
    if(a.length !== b.length) return false
    for (let key of a) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            return deepEqual(obj1[key], obj2[key])
        } else if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true

}

console.log(deepEqual(obj1, obj2))