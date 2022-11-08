let canvas;

// Inventory Variables
const seed_panel = document.getElementById("seed_panel");
const recipe_book = document.getElementById("recipe_book");
const cant_cook = document.getElementById("cant_cook");
const cant_bake = document.getElementById("cant_bake");

// Artwork Variables
let tilesetArtwork;
let cropsArtwork;
let foodArtwork;

let profit = 0;

let recipeName, canCook;

let inventory = {
  potatoes: 10,
  tomatoes: 0,
  lettuce: 0,
  carrots: 0,
  strawberries: 0,
  watermelons: 0,
  pumpkins: 0,
  milk: 0
};

let player, recipe;
let playerId = 4;
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
  setPlantWorld();
  setupStoves();
}

function draw() {
  // draw the bkworld and the character
  background(255);
  drawbkworld();

  // the character will always be drawn in the middle of the screen
  player.moveAndDisplay();

  fill(0);
  textSize(13);
  stoveDisplay();
  // text("growing : " + player.currentSeed, 10, 15);
  //
  // text("potatoes: " + inventory["potatoes"], 10, 30);
  // text("tomatoes: " + inventory["tomatoes"], 90, 30);
  // text("lettuce: " + inventory["lettuce"], 200, 30);
  // text("carrots: " + inventory["carrots"], 10, 40);
  // text("strawberries: " + inventory["strawberries"], 90, 40);
  // text("watermelons: " + inventory["watermelons"], 200, 40);
  // text("pumpkin: " + inventory["pumpkins"], 10, 50);
  // text("can you cook recipe name " + recipeName + " " + canCook, 10, 60);
  // text("does player have water " + player.water, 10, 70);
  // text("$$$ profit " + profit, 10, 80);

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
  document.getElementById("milk_inventory").innerHTML =
    inventory["milk"];

  if (player.water) {
    document.getElementById("watering_can").innerHTML = "full";
  } else {
    document.getElementById("watering_can").innerHTML = "empty";
  }
  document.getElementById("profit").innerHTML = "$" + profit;
  document.getElementById("current_seed").innerHTML = player.currentSeed;

  // console.log(frameRate());
}

// potatoes, tomatoes, lettuce, carrots, strawberries, watermelons, pumpkin;
function cook(recipeNa) {
  let recipe = getRecipe(recipeNa);
  recipeName = recipeNa;
  console.log(recipe);
  canCook = recipe.canCook(inventory);
  if (canCook) {
    let canBake = recipe.cook(inventory);
    cant_cook.classList.add("hidden");
    console.log(canBake);
    if (canBake) {
      recipe_book.classList.add("hidden");
      cant_bake.classList.add("hidden");
    }
  } else {
    cant_cook.classList.remove("hidden");
    cant_bake.classList.add("hidden");
    return;
  }
}

function setPlayerSeed(seed) {
  player.currentSeed = seed;
  seed_panel.classList.add("hidden");
}

function getTileAtPosition(screenX, screenY) {
  let arrayX = int(screenX / tileSize);
  let arrayY = int(screenY / tileSize);
  if (plantWorld[arrayY][arrayX] != undefined) {
    return plantWorld[arrayY][arrayX].id;
  }
  return -1;
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
