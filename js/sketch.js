let canvas;

// Inventory Variables
const seed_panel = document.getElementById("seed_panel");
const recipe_book = document.getElementById("recipe_book");
const cant_cook = document.getElementById("cant_cook");
const cant_bake = document.getElementById("cant_bake");
const seeds = document.getElementById("seeds");

// Artwork Variables
let tilesetArtwork, cropsArtwork, foodArtwork;

// Recipe Variables
let recipe, recipeName, canCook;

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
}

function setup() {
  canvas = createCanvas(640, 640).id("canvas");
  canvas.parent("#game");
  background(128);

  // create our player
  player = new Player(width / 2, height / 2);
  setupRecipes();
  setupPlantWorld();
  setupStoves();
}

function draw() {
  displayBackground();

  player.moveAndDisplay();
  displayRecipes();
  displayStoves();
  displayInventory();
}

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

function keyPressed() {
  if (key == " ") {
    player.plant();
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

function openMenu() {
  if (recipe_book.classList.contains("hidden")) {
    recipe_book.classList.remove("hidden");
    seed_panel.classList.add("hidden");
  } else {
    recipe_book.classList.add("hidden");
    cant_cook.classList.add("hidden");
  }
}
