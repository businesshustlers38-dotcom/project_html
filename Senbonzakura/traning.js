
/*
/* Det här delen är balandat med datatyper och variabler */
console.log("🚀 Träning i fetch och error handling!");
const name = "Alice";
console.log(`Hej, ${name}!`);
let falseValue = false;
if (falseValue) {
  console.log("Detta kommer inte att skrivas ut.");
} else {
  console.log("Detta kommer att skrivas ut.");
}



/* Det här delen är en funktion */

function greet(number){
  if (number < 0) {
    console.error("❌ Fel: Negativt nummer!");
    return;
  }
  console.log(`Hej, ${name}!`);

}

/* Det här delen är en funktion */
function divide(a,b) {
  if (b === 0) {
    console.error("❌ Fel: Division med noll!");
    return null;
  }
  return a / b;
}

/* Det här delen är en objekt */
const name3 = {name: "Boss", age: 22};
console.log(`Hej, ${name3.name}!`);
name3.age = 23;
console.log(`Hej, ${name3.name}! Du är nu ${name3.age} år gammal!`);


/* Det här delen är en array */
const games = ["Chess", "Monopoly", "Scrabble"];
console.log("🎲 Spel:", games);
games.push("Clue");
console.log("🎲 Spel efter tillägg:", games);

/* Det här delen är en kombination av datatyper */
let stepOne = "Am going to learn programming";
let stepTwo = "I will practice every day";
let stepThree = "I will build cool projects";
let stepFour = "I will never give up";
console.log(`📚 ${stepOne}, ${stepTwo}, ${stepThree}, ${stepFour}.`);

if (stepOne && stepTwo && stepThree && stepFour) {
  console.log("✅ Alla steg är klara!");
} else {
  console.log("❌ Något saknas.");
}

function completeallSteps(step) { 
  if (step) {
    console.log(`✅ Steg klart: ${step}`);
  }
  else
  {
    console.error("❌ Fel: Steg saknas!");
  }

}
const theSteps = [stepOne, stepTwo, stepThree, stepFour];
console.log("📋 Steg att följa:", theSteps);

/* Nu går jag mot andra delen */

for (const step of theSteps) {
  completeallSteps(step);
}

while (theSteps.length > 0) {
  const step = theSteps.shift();
  completeallSteps(step);
}

let count = 0;

do {
  console.log(`🔁 Loopar: ${count}`);
  count++;
}
while (count < 5) {
  console.log(`🔁 Loopar: ${count}`);
  count++;
}


/* Nu börjar här att lära mig att använda React */

import React from 'react';
import ReactDOM from 'react-dom';

function Welcome2({name}) {
  return <h1>Välkommen till mitt projekt, {name}!</h1>;
}

function Card({tema, description}) {
  return (
    <div className="card">
      <h2>{tema}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome2 name="Mikiel" />
      <Card tema="React" description="Lär dig grunderna i React!" />
      <Card tema="JavaScript" description="Förbättra dina JS-kunskaper!" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

