//Apply

const obj1 = { item: 'some value' }

function logger1() {
    console.log(`I output only external context: ${this.item}`)
}

logger1.apply(obj1)



//Call
const obj2 = { item: 'some value' }

function logger2() {
    console.log(`I output only external context: ${this.item}`)
}

logger2.call(obj2)

//Bind

const obj3 = { item: 'some value' }

function logger3() {
    console.log(`I output only external context: ${this.item}`)
}

logger3.bind(obj3)()


//полифил
function newBind(fn, context, ...rest){
    return function (...args){
        return fn.call(context,...rest.concat(args))
    }
}