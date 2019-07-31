const isEven = function(n) {
    if (n < 0) return "Not a positive number";
    if (n == 0) return true;
    if (n == 1) return false;
    n = n - 2;
    return isEven(n);
};

console.log(isEven(-1));
