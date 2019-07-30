let count = 1;
let triangle = '#';
do {
    console.log(triangle.repeat(count))
    count++;
} while (count < 8);


for (let line = '#'; line.length < 8; line += '#')
console.log(line);