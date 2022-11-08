let canvas;

// Inventory Variables
const seed_panel = document.getElementById("seed_panel");
const recipe_book = document.getElementById("recipe_book");
const cant_cook = document.getElementById("cant_cook");
const cant_bake = document.getElementById("cant_bake");
const seeds = document.getElementById("seeds");

// Artwork Variables
let tilesetArtwork,
  cropsArtwork,
  foodArtwork,
  cloud,
  cowPic,
  milkPic,
  poopPic,
  bucketPic;
let gameState, cowGameState;

// Recipe Variables
let recipe, recipeName, canCook;

// Player inventory - increases when harvesting and decreases when cooking
let inventory = {
  potatoes: 10,
  tomatoes: 0,
  lettuce: 0,
  carrots: 0,
  strawberries: 0,
  watermelons: 0,
  pumpkins: 0,
  milk: 0,
};

function preload() {
  tilesetArtwork = loadImage("images/fullTileset.png");
  characterArtwork = loadImage("images/character.png");
  foodArtwork = loadImage("images/food.png");
  cloud = loadImage("images/cloud.png");
  cowPic = loadImage("images/cow.png");
  milkPic = loadImage("images/milk.png");
  poopPic = loadImage("images/poop.png");
  bucketPic = loadImage("images/bucket.png");
}

function setup() {
  canvas = createCanvas(640, 640).id("canvas");
  canvas.parent("#game");
  background(128);

  // create our player
  player = new Player(width / 2, height / 2);

  // setup our configurations
  setupRecipes();
  setupPlantWorld();
  setupStoves();

  //setting up cowGame
  cowGameState = false;
  myCow = new Cow(10, 10);
  myBucket = new Bucket(300, 580);

  gameState = "farming";
}

function draw() {
  if (gameState == "farming") {
    displayBackground();
    player.moveAndDisplay();
    displayRecipes();
    displayStoves();
    displayInventory();
    if (keyIsDown(67)) {
      gameState = "cowGame";
    }
  }
  if (gameState == "cowGame") {
    image(cloud, 0, 0);
    cowGameStart();
  }
  if (gameState == "endCowGame") {
    background(0);
    fill(255);
    text(
      "You've collected " +
        milkPoint +
        " bottles of milk. Press SPACE to return to farming.",
      20,
      20
    );
    if (keyIsDown(32)) {
      gameState = "farming";
    }
  }
}

// HTML interactions
function displayInventory() {
  document.getElementById("potatoes_inventory").innerHTML =
    inventory["potatoes"];
  document.getElementById("tomato_inventory").innerHTML = inventory["tomatoes"];
  document.getElementById("lettuce_inventory").innerHTML = inventory["lettuce"];
  document.getElementById("carrot_inventory").innerHTML = inventory["carrots"];
  document.getElementById("strawberry_inventory").innerHTML =
    inventory["strawberries"];
  document.getElementById("watermelon_inventory").innerHTML =
    inventory["watermelons"];
  document.getElementById("pumpkin_inventory").innerHTML =
    inventory["pumpkins"];

  // document.getElementById("milk_inventory").innerHTML = inventory["milk"];

  if (player.water) {
    document.getElementById("watering_can").innerHTML = "full";
  } else {
    document.getElementById("watering_can").innerHTML = "empty";
  }
  document.getElementById("profit").innerHTML = "$" + profit;
}

// From HTML button, check if something can be cooked based on inventory and stove availaibity
function cook(tempRecipe) {
  let recipe = getRecipe(tempRecipe);
  recipeName = tempRecipe;
  canCook = recipe.canCook(inventory);
  if (canCook) {
    let canBake = recipe.cook(inventory);
    cant_cook.classList.add("hidden");
    if (canBake) {
      recipe_book.classList.add("hidden");
    }
  } else {
    cant_cook.classList.remove("hidden");
    return;
  }
}

// User interactions - space for most interactions and p to visit seeds
function keyPressed() {
  if (key == " ") {
    player.process();
  }

  if (key == "p") {
    if (seed_panel.classList.contains("hidden")) {
      seed_panel.classList.remove("hidden");
      recipe_book.classList.add("hidden");
    } else {
      seed_panel.classList.add("hidden");
    }
  }
}

// Shows off recipe book
function openMenu() {
  if (recipe_book.classList.contains("hidden")) {
    recipe_book.classList.remove("hidden");
    seed_panel.classList.add("hidden");
  } else {
    recipe_book.classList.add("hidden");
    cant_cook.classList.add("hidden");
  }
}
