//Промисы
//1) 1-3-6-4-2-5
//2) 1-3-2
//3) abc
//4) 1 123 2 123 3 321 4 undefined
//5) 1 4 3 2

//delayFunc
let devArr = [5,1,6,4,7]
const delayFunc = (arr) => {
    if (arr.every(Number.isInteger) && arr.length !== 0) {
        arr.forEach((el, i) => {
            setTimeout(() => console.log(i), (i + 1) * 3000)
        })
    }else{
        return console.log("Массив состоит не из целых чисел")
    }
}
delayFunc(devArr)


