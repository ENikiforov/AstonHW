/*
//"неправильность" массивов
// - Массивы в JavaScript могут содержать элементы разных типов данных(числа, строки и объекты в одном массиве).
// - Размер массива может динамически изменяться. Можно добавлять или удалять элементы без явного указания размера.
// - Массивы реализованы как объекты с числовыми свойствами. Когда вы добавляете элементы в массив, JavaScript просто увеличивает числовые свойства объекта.
// - Массивы - имеют способы итерации, которые реализованы  с помощью циклов или методов(push, pop, shift и т.д).

Массивы в JS совмещают в себе следующие структуры данных:
// - Queue
// - Stack
// - Linked List
// - Binary Tree

*/

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