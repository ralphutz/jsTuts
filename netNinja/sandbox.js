// const greet = () => "hello, world";
// const result = greet();

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };
// console.log(bill([10, 15, 30], 0.2));

// let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);

ul.innerHTML = html;
