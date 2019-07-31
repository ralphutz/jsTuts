const countChar = function(string, char) {
    let stringPositionMax = string.length - 1;
    let count = 0;
    for (stringSpot = 0; stringSpot <= stringPositionMax; stringSpot++) {
        if (string[stringSpot] == char) count += 1;
    }
    return count;
};

console.log(countChar("Turtle", "t"));
