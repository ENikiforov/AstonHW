function getLength(a,b){

}


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function compare(a, b) {
    if (a == null && b == null) return true
    if (a == null || b == null) return false
    if (a.value == b.value) {
        return (
            compare(a.left, b.left) && compare(a.right, b.right)
        )
    }
    return false
}

const root1 = new Node(1);
const root2 = new Node(3);

console.log(compare(root1, root2))