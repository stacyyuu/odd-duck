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
// Empty array to push random index generated 
let randomIndex = [];

// Return random index inside allProducts array 
function randomImage() {
  // Return a random index inside allProducts array 
  return Math.floor(Math.random() * allProducts.length);
}

// Event Listener Steps:
let button = [document.getElementById('button0'), document.getElementById('button1'), document.getElementById('button2')];
for (let i = 0; i < button.length; i++){
  button[i].addEventListener('click', generateRandomImages);
}

// Event handler that gets invoked when button is clicked 
function generateRandomImages(event) {
  // Generate a random product 
  let product = 0;
  // Iterate over the random array and assign product to i 
  for (let i = 0; i < randomIndex.length; i++){
    product = randomIndex[i];
    // Increments shown products for each image
    product.shown++;
    // Get image by id, use i in string interpolation to iterate over ids 0-2
    let img = document.getElementById(`productImage${i}`);
    // Assign image to product 3x
    img.src = `img/${product.name}.jpg`;
    img.alt = product.name;
    img.title = product.name;
    // If image equals the event.targeted, then increment to clicked
    if (event){
      if (img === event.target){
        product.clicked++;
      }
    }
  }
  // Increment over current round 
  currentRound++;
  if (currentRound === 26){
    for ( let i = 0; i < button.length; i++){
      button[i].removeEventListener('click', generateRandomImages);
    }

    localStorage.removeItem('All Products');
    localStorage.removeItem('Round');

    alert('Finished voting! View your results by clicking the results button.');
  }
  // Generate new random index 
  generateRandomIndex();

  // Local Storage
  setItems();
  getItems();
}


// HINT: use Array.includes() to generate 3 random images 
function generateRandomIndex () {
  // Give length to random index
  while (randomIndex.length < 3) {
    let randomImg = randomImage();
    if (!randomIndex.includes(allProducts[randomImg])) {
      randomIndex.push(allProducts[randomImg]);
    }
  }
  generateNewIndex();
}

function generateNewIndex () {
  let newIndex = [];
  while (newIndex.length < 3) {
    let randomImg = randomImage();
    if (!newIndex.includes(allProducts[randomImg]) && !randomIndex.includes(allProducts[randomImg])){
      newIndex.push(allProducts[randomImg]);
    }
  }
  console.log(randomIndex, newIndex);
  randomIndex = newIndex;
}

generateRandomIndex();
generateRandomImages();

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
    // Render chart when view results clicked 
    renderChart();

    // Invoke setAllProducts function here 
  }
}

// Render the chart after 25 clicks
function renderChart() {
  let productNames = [];
  let clicks = [];
  let shown = [];
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name[0].toUpperCase() + allProducts[i].name.slice(1, allProducts[i].name.length));
    clicks.push(allProducts[i].clicked);
    shown.push(allProducts[i].shown);
  }

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart (ctx, {
    type: "bar",
    data: {
      labels: productNames,
      datasets: [
        {
          label: "# of Votes",
          data: clicks,
          backgroundColor: [
            "#D5D6EA"
          ],
          borderColor: [
            "#D5D6EA"
          ],
          borderWidth: 1,
        },

        {
          label: "# of Times Shown",
          data: shown,
          backgroundColor: [
            "#F3DDF2",
          ],
          borderColor: [
            "#F3DDF2"
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function setItems (){
  let stringifyVersion = JSON.stringify(allProducts);
  localStorage.setItem('All Products', stringifyVersion);
}

function getItems (){
  let stringifyVersion = localStorage.getItem('All Products');
  let parsedVersion = JSON.parse(stringifyVersion);
  
  return parsedVersion;
}

// Steps of Local Storage:

// 1. Setting items
// JSON.stringify(variable);
// localStorage.setItem("key", "value");

// Function set allProducts
// function setAllProducts (key, value){

// }

//2. Getting Items
// localStorage.getItem("key");
// JSON.parse(variable);

// Function get allProducts
// Invoked when page is loaded