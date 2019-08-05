const reverseArray = function(array) {
    let result = [];
    for (let element of array) {
        result.unshift(element);
    }
    return result;
};
let numbers = [0, 1, 2, 3];
console.log(reverseArray(numbers))
