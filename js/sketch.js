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
let gameState, cowGameState, endCowGame;

// Recipe Variables
let recipe, recipeName, canCook;

// Achievement Variables
let achievement1 = false;
let achievement2 = false;
let achievement3 = false;
let achievement4 = false;
const cookedSet = new Set();

// Player inventory - increases when harvesting and decreases when cooking
let inventory = {
  potatoes: 20,
  tomatoes: 20,
  lettuce: 20,
  carrots: 20,
  strawberries: 20,
  watermelons: 20,
  pumpkins: 20,
  milk: 20
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

  // setting up cowGame
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

    if (profit >= 10 && achievement1==false) {
      document.getElementById('achievement1').classList.remove('hidden');
    }

    if (profit >= 100 && achievement2==false) {
      document.getElementById('achievement1').classList.add('hidden');
      document.getElementById('achievement2').classList.remove('hidden');
    }

    if (profit >= 500 && achievement3==false) {
      document.getElementById('achievement2').classList.add('hidden');
      document.getElementById('achievement3').classList.remove('hidden');
    }

    if (cookedSet.size==8 && achievement4==false) {
      document.getElementById('achievement4').classList.remove('hidden');
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
  document.getElementById("milk_inventory").innerHTML = inventory["milk"];

  if (player.water) {
    document.getElementById("watering_can").innerHTML = "full";
  } else {
    document.getElementById("watering_can").innerHTML = "empty";
  }
  document.getElementById("profit").innerHTML = "$" + profit;
  document.getElementById("current_seed").innerHTML = player.currentSeed;
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
      cant_cook.classList.add("hidden");
      cant_bake.classList.add("hidden");
    }
  } else {
    cant_cook.classList.remove("hidden");
    cant_bake.classList.add("hidden");
    return;
  }
}

// User interactions - space for most interactions,
// p to visit seeds, escape for exiting out of achievement popups
function keyPressed() {
  if (key == " ") {
    player.process();
  }

  if (key == "p" && gameState == "farming") {
    if (seed_panel.classList.contains("hidden")) {
      seed_panel.classList.remove("hidden");
      recipe_book.classList.add("hidden");
      closeAchievement();
    } else {
      seed_panel.classList.add("hidden");
    }
  }

  if (key == "Escape") {
    closeAchievement();
}

// Shows off recipe book
function openMenu() {  
  if (recipe_book.classList.contains("hidden")) {
    closeAchievement();
    recipe_book.classList.remove("hidden");
    seed_panel.classList.add("hidden");
  } else {
    recipe_book.classList.add("hidden");
    cant_cook.classList.add("hidden");
    cant_bake.classList.add("hidden");
  }
}

// Closes achievement popups appropriately
function closeAchievement() {
  if (profit>=10) {
      if (profit>=200) {
        document.getElementById('achievement3').classList.add('hidden');
        achievement3 = true;
      } else if (profit>=100) {
        document.getElementById('achievement2').classList.add('hidden');
        achievement2 = true;
      }
      document.getElementById('achievement1').classList.add('hidden');
      achievement1 = true;
    }
    if (cookedSet.size>=8) {
      document.getElementById('achievement4').classList.add('hidden');
      achievement4 = true;
    }
  }
}
