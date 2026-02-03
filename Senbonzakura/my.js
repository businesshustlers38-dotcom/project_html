 /* console.log("My script is loaded and running!");

function setupModal() {
  const openModalButton = document.querySelector('.btn');
  const modalBox = document.querySelector('.modal__box');
  const closeModalButton = modalBox.querySelector('button[type="button"]');}
  
  // 1. Interaktivitet & DOM

  function toggleModal() {
    modalBox.classList.toggle('modal--is-open');
  }
  console.log("Modal setup complete.");

  // 2. Events & användarflöde

  openModalButton.addEventListener('click', toggleModal);
  closeModalButton.addEventListener('click', toggleModal);

  // 3.  Data & logik

  // 4. Validering & felhantering (grund)

  /* */

  

/*
function performMathOperations(tal) {
    console.log("Avrundat:", Math.round(tal));
    console.log("Uppåt (ceil):", Math.ceil(tal));
    console.log("Nedåt (floor):", Math.floor(tal));
}
console.log("Matematiska operationer för talet 4.7:");
performMathOperations(4.7);
*/

/*
function generateRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Slumptal mellan 1 och 100:", generateRandomNumber(1, 100));


document.getElementById("demo").innerHTML = "Hello JavaScript!";

document.getElementById('myElement').addEventListener('mousedown', function() {
console.log('Mouse button pressed!');
});

*/
document.getElementById('myElement').addEventListener('mouseup', function() {
console.log('Mouse button released!');
});
