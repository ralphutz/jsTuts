const ranges = function(start, end) {
    let numbers = [];
    while (start <= end) {
        numbers.push(start);
        start += 1;
    }
    return numbers;
};

const sums = function(numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
};

console.log(sums(ranges(1, 10)));
