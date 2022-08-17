'use strict';

// Product Constructor:
// Only parameter is name, because click always starts at 0
function Product(name) {
  this.name = name;
  this.clicked = 0;
  this.shown = 0;
}

// Products Category 
let allProducts = [
  new Product('bag'),
  new Product ('banana'),
  new Product ('bathroom'),
  new Product ('boots'),
  new Product ('breakfast'),
  new Product ('bubblegum'),
  new Product ('chair'),
  new Product ('cthulhu'),
  new Product ('dog-duck'),
  new Product ('dragon'),
  new Product ('pen'),
  new Product ('pet-sweep'),
  new Product ('scissors'),
  new Product ('shark'),
  new Product ('sweep'),
  new Product ('tauntaun'),
  new Product ('unicorn'),
  new Product ('water-can'),
  new Product ('wine-glass')
];

let currentRound = 0;
let randomArray = [];

// Return random index inside allProducts array 
function randomImage() {
  // Return a random index inside allProducts array 
  return Math.floor(Math.random() * allProducts.length)
}

// Event Listener Steps:
let button = [document.getElementById('button0'), document.getElementById('button1'), document.getElementById('button2')];
for (let i = 0; i < button.length; i++){
  button[i].addEventListener('click', showNewImage);
}

// Event handler that gets invoked when button is clicked 
function showNewImage(event) {
  console.log(randomArray);
  // Generate a random product 
  let product = 0;
  // Select img 
  for (let i = 0; i < randomArray.length; i++){
    product = randomArray[i];
    let img = document.getElementById(`productImage${i}`)
    // Make img the product 
    img.src = `img/${product.name}.jpg`;
    img.alt = product.name;
    img.title = product.name;

    if (event){
      if (img === event.target){
        product.clicked++;
      }
    }
  }
  product.shown++;
  currentRound++;
  if (currentRound === 5){
    for ( let i = 0; i < button.length; i++){
      button[i].removeEventListener('click', showNewImage);
    }
  }
  // Increments shown product'sproperty 
  generateRandomArray();
}


// HINT: use Array.includes() to generate 3 random images 
function generateRandomArray () {
  while (randomArray.length < 3) {
    let randomIndex = randomImage();
    while (!randomArray.includes(allProducts[randomIndex])) {
      randomArray.push(allProducts[randomIndex]);
    }
  }

  randomArray.shift();
  randomArray.shift();
  randomArray.shift();

  while (randomArray.length < 3) {
    let randomIndex = randomImage();
    while (!randomArray.includes(allProducts[randomIndex])) {
      randomArray.push(allProducts[randomIndex]);
    }
  }
}

generateRandomArray();
showNewImage();

console.log(randomArray);

// // Chart 
// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//   ];

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: allProducts[0],
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };

//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );

// let strings = [];
// let uniqueNUmbers = [];


// // Generate random number between 0-max
// function randomIndex (length){
//     return Math.floor(Math.random() * lrngth);
// }

// while (uniqueNUmbers.length < 3){
//     let randomIndex = randomIndex(strings.length);
//     while (!uniqueNUmbers.includes(strings[randomIndex])){
//         uniqueNUmbers.push(strings[randomIndex]);
//     }
// }

// uniqueNUmbers.shift();
// uniqueNUmbers.shift();
// uniqueNUmbers.shift();