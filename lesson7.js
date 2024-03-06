const pattern = (n) => {
    if (n < 1 || typeof n !== 'number') return console.log("n должны быть числом больше или равно 1")
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = 1; j <= i; j++) {
            str += j
        }
        let reversedStr = str.split('').reverse().join('').slice(1)
        let spaces = ' '.repeat(n - i)
        console.log(spaces + str + reversedStr)
    }

    for (let i = n - 1; i >= 1; i--) {
        let line = ''
        for (let j = 1; j <= i; j++) {
            line += j
        }
        let reversedLine = line.split('').reverse().join('').slice(1)
        let spaces = ' '.repeat(n - i)
        console.log(spaces + line + reversedLine)
    }
}

pattern(0)
pattern("2")
pattern(5)


class PaginationUtil {
    constructor(items, itemsCount) {
        this.items = items
        this.itemsCount = itemsCount
    }

    pageCount() {
        return Math.ceil(this.items.length / this.itemsCount)
    }

    itemCount() {
        return this.items.length
    }

    pageItemCount(index) {
        if (index < 0 || index >= this.pageCount()) {
            return -1;
        }
        let startInd = index * this.itemsCount
        return Math.min(startInd + this.itemsCount, this.items.length) - startInd
    }

    pageIndex(ind) {
        if (ind < 0 || ind >= this.items.length) {
            return -1
        }
        return Math.floor(ind / this.itemsCount)
    }

}

const helper = new PaginationUtil(['a', 'b', 'c', 'd', 'e', 'f'], 4)

console.log(helper.pageCount())
console.log(helper.itemCount())
console.log(helper.pageItemCount(0))
console.log(helper.pageItemCount(1))
console.log(helper.pageItemCount(2))
console.log(helper.pageIndex(5))
console.log(helper.pageIndex(2))
console.log(helper.pageIndex(20))
console.log(helper.pageIndex(-10))
