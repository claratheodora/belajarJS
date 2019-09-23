function double(array) {
    let newArray = [];
    for (const num of array) {
        newArray.push(num * 2);
    }
    return newArray;
}

let a = [1, 2, 3];
let result = double(a);
console.log(result);

// function map(array, fn) {
//     let newArray = array.map(fn)
//     return newArray;
// }
// let result = map([1, 2, 3], (num) => num * 2);
// console.log(result);