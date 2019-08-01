const isEven = function(n) {
    if (n < 0) return "Not a positive number";
    if (n == 0) return true;
    if (n == 1) return false;
    n = n - 2;
    return isEven(n);
};

console.log(isEven(-1));

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
day1.wolf = false;
day1.events.pop();
console.log(day1);
