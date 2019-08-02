const range = function(start, end) {
    numbers = [];
    while (start <= end) {
        numbers.push(start);
        start += 1;
    }
    return numbers;
};

console.log(range(2, 4));
