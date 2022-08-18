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
let randomIndex = [];

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
  // Generate a random product 
  let product = 0;
  // Select img 
  for (let i = 0; i < randomIndex.length; i++){
    product = randomIndex[i];
    product.shown++;
    let img = document.getElementById(`productImage${i}`);
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

  currentRound++;
  if (currentRound === 26){
    for ( let i = 0; i < button.length; i++){
      button[i].removeEventListener('click', showNewImage);
    }
  }
  console.log(randomIndex);
  // Increments shown product'sproperty 
  generateRandomIndex();
}


// HINT: use Array.includes() to generate 3 random images 
function generateRandomIndex () {
  while (randomIndex.length < 3) {
    let randomImg = randomImage();
    while (!randomIndex.includes(allProducts[randomImg])) {
      randomIndex.push(allProducts[randomImg]);
    }
  }

  randomIndex.shift();
  randomIndex.shift();
  randomIndex.shift();

  while (randomIndex.length < 3) {
    let randomImg = randomImage();
    while (!randomIndex.includes(allProducts[randomImg])) {
      randomIndex.push(allProducts[randomImg]);
    }
  }
}

generateRandomIndex();
showNewImage();

let results = document.getElementById('getResults');
results.addEventListener('click', getResults);

function getResults (){
  if (currentRound === 26){
    let ul = document.createElement('ul');
    results.appendChild(ul);
    for (let i = 0; i < allProducts.length; i++){
      let list = document.createElement('li');
      list.innerText = `${allProducts[i].name} was shown ${allProducts[i].shown} times and was clicked ${allProducts[i].clicked} times.`;
      ul.appendChild(list);
    }
  }
}




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