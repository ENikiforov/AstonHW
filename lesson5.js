//1. Сортировки
// Сортировка пузырьком
// Сортировка выбором
// Быстрая сортировка
// Циклическая сортировка
// Сортировка вставками
// Сортировка слиянием
// Пирамидальная сортировка

//2. Создать объект

//класс
class Person1 {
    constructor() { }
}

class AnotherPerson1 extends Person1 {
    constructor() {
        super()
    }
}

Person1.prototype.logInfo = function() {
    console.log('Hello World')
}
const anotherPerson1 = new AnotherPerson1
anotherPerson1.logInfo()

//литерал

const person = {}
const anotherPerson2 = {}
Object.setPrototypeOf(anotherPerson2, person)
person.logInfo = function() {
    console.log('Hello World')
}
anotherPerson2.logInfo()

//функция-конструктор

function Person2(name) {
    this.name = name
}

function AnotherPerson2(name) {
    Person2.call(this, name)
}
AnotherPerson2.prototype = Object.create(Person2.prototype)
AnotherPerson2.prototype.constructor = AnotherPerson2
AnotherPerson2.prototype.logInfo = function() {
    console.log('Hello World')
}
const person2 = new Person2('Ivan')
const anotherPerson3 = new AnotherPerson2('Igor')

anotherPerson3.logInfo()

//3.супер класс
class SuperPerson {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }
}

class UltraPerson extends SuperPerson {
    constructor(name) {
        super(name)
    }
}
const superPerson = new SuperPerson('Ivan')
superPerson.name = 'Igor'
console.log(superPerson.name)
const ultraMan = new UltraPerson('Alex')
console.log(ultraMan.name)

//firstSum
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const total = 13
const firstSum = (arr, total) => {
  const nums = {}
    for(let i = 0; i < arr.length; i++){
        nums[arr[i]] = i
    }
    for(let i = 0; i < arr.length; i++){
        const diff = total - arr[i]
        if(nums[diff] && nums[diff] !== i){
            let a = nums[diff]
            return[arr[i],arr[a]]
        }
    }
    return false
}
console.log(firstSum(arr,total))

//сложность данного алгоритма О(n)
//Так как время выполнения алгоритма пропорционально размеру входных данных, проходя по всем элементам массива за один цикл.
