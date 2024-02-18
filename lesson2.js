function getLength(a) {
    if (typeof a === 'string' || Array.isArray(a)) {
        return console.log(a.length);
    } else if (typeof a === 'object' && a !== null) {
        if (typeof a.length === 'number') {
            return console.log(a.length)
        } else {
            return console.log(0)
        }
    } else{
        return console.log(0)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function compare(a, b) {
    if (a == null && b == null) return true
    if (a == null || b == null) return false
    if (Number.isInteger(a.value) && Number.isInteger(b.value) && (a.value === b.value)){
        return (
            compare(a.left, b.left) && compare(a.right, b.right)
        )
    }
    return false
}

const root1 = new Node(undefined);
root1.left = new Node(1);
root1.right = new Node(3);


const root2 = new Node(undefined);
root2.left = new Node(1);
root2.right = new Node(2);


console.log(compare(root1, root2))
console.log()