function countDownFrom(n) {
    console.log(n);
    if (n == 1) return;
    countDownFrom(--n);
}

countDownFrom(5);
