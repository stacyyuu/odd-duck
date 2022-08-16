'use strict'

// Product Constructor:
// Only parameter is name, because click always starts at 0
function Product(name) {
    this.name = name;
    this.clicked = 0;
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

let currentRound = 1;
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
function showNewImage() {
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
            // Increments shown product's .clicked property 
        product.clicked++;
    }
    currentRound++;
    if (currentRound === 25){
    for ( let i = 0; i < button.length; i++){
        button.removeEventListener('click', showNewImage);
        }
        // Remove my event listener
    }
}


// HINT: use Array.includes() to generate 3 random images 
function generateRandomArray () {
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