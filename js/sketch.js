let canvas;

// Inventory Variables
const inventory_panel = document.getElementById("inventory_panel");
// const inventory = document.getElementById("inventory");
const seeds = document.getElementById("seeds");
const tools = document.getElementById("tools");

// Farming Variables
let tilesetArtwork;
let cropsArtwork;
let tileSize = 32;

let recipeName, canCook;

let dirtId = 12;
let inventory = {
  potatoes: 0,
  tomatoes: 0,
  lettuce: 0,
  carrots: 0,
  strawberries: 0,
  watermelons: 0,
  pumpkins: 0,
};

let player, recipe;
let playerId = 4;
function preload() {
  tilesetArtwork = loadImage("images/fullTileset.png");
}

function setup() {
  canvas = createCanvas(640, 640).id("canvas");
  canvas.parent("#game");
  background(128);

  // create our player
  player = new Player(width / 2, height / 2);
  setupRecipes();
  setPlantWorld();
}

function draw() {
  // draw the bkworld and the character
  background(255);
  drawbkworld();

  // the character will always be drawn in the middle of the screen
  player.moveAndDisplay();

  fill(0);
  textSize(15);
  text("growing : " + player.currentSeed, 10, 15);

  text("potatoes: " + inventory["potatoes"], 10, 30);
  text("tomatoes: " + inventory["tomatoes"], 90, 30);
  text("lettuce: " + inventory["lettuce"], 200, 30);
  text("carrots: " + inventory["carrots"], 10, 50);
  text("strawberries: " + inventory["strawberries"], 90, 50);
  text("watermelons: " + inventory["watermelons"], 200, 50);
  text("pumpkin: " + inventory["pumpkins"], 10, 70);
  text("can you cook recipe name " + recipeName + " " + canCook, 10, 80);
  text("does player have water " + player.water, 10, 90);

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
}

// potatoes, tomatoes, lettuce, carrots, strawberries, watermelons, pumpkin;
function cook(recipeNa) {
  let recipe = getRecipe(recipeNa);
  recipeName = recipeNa;
  canCook = recipe.canCook(inventory);
}

function setPlayerSeed(seed) {
  player.currentSeed = seed;
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
  if (key == "i") {
    if (inventory_panel.classList.contains("hidden")) {
      inventory_panel.classList.remove("hidden");
    } else {
      inventory_panel.classList.add("hidden");
    }
  }
}
