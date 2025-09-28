console.log(`Test 1`);
window.alert(`Welcome to your first visit`);
document.getElementById("minh1").textContent = `Firest lesson of the day`;
document.getElementById("minp").textContent = `First thing to do in order to learn coding is to have wifi at home`;

let x = 100;
let firstName = "Mike";

console.log(typeof firstName);
console.log(`Du har med dig ${x} kr `);

const money = "1000 kr";
console.log(`Du har med dig ${money} kr `);


document.getElementById("p2").textContent = `My name is ${firstName} `;
document.getElementById("p3").textContent = `This is a Java and html first expriment`;

// Variable = Is a container that stores a value. 
// Behaver as if it were the value it contains.

var firstName3 = "Mikei";
var age = 20;
var city = "Istanbul";

console.log(firstName3);
console.log(age);
console.log(city);

if (age >= 18) {
    console.log(`Du får rösta`);
} 

else {
    console.log(`Du får inte rösta`);
}

switch (city) {
    case "Stockholm":
        console.log(`Jag bor i Stockholm`);    
    break;

    case "Göteborg":
        console.log(`Jag bor i Göteborg`);
    break;

    case "Malmö":
        console.log(`Jag bor i Malmö`);
    break;

    default: console.log(`Jag bor i den finaste staden i världen`);
    break;
}

for (var i = 0; i < 11; i++) {
    console.log(i);
}
/* while loop = repeat some code while some condition is true */

let y = 100;
while ( y >= 1) {
    console.log(y);
    y=y/2; 
}

// basic function declaration

function multiplay (b , a) {
    return b * a;
}
console.log(multiplay(5, 10));

