function countDownFrom(n) {
    console.log(n);
    if (n == 1) return;
    countDownFrom(--n);
}

countDownFrom(5);

const t = [1, 2, 3];
const m1 = t.map(value => value * 2);
const m2 = t.map(value => "<li>" + value + "</li>");
console.log(m2);

const t = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = t;

//console.log(third)
console.log(rest[0]);

const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
};

const result = sum(1, 5);
console.log(result);
