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

let dirtId = 12;
let inventory = {
  wheat: 0,
  tomatoes: 0,
  lettuce: 0,
  carrots: 0,
  strawberries: 0,
  watermelons: 0,
  pumpkins: 0,
};

let bkworld = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let world = [
  [51, 51, 51, 51, 51, 51, 51, 51, 49, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [51, 51, 51, 51, 51, 51, 51, 51, 49, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [51, 51, 51, 51, 51, 51, 51, 51, 49, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [49, 49, 49, 3, 3, 49, 49, 49, 49, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 50, 50, 50, 50, 50, 50, 50, 50, 3],
  [3, 3, 12, 12, 3, 3, 12, 12, 3, 3, 3, 50, 50, 50, 50, 50, 50, 50, 50, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

// soil = 12;

let plantWorld = [];

let crops = {
  wheat: [11, 23, 35, 47, 59],
  strawberries: [10, 22, 34, 46, 58],
  tomatoes: [9, 21, 33, 45, 57],
  lettuce: [8, 20, 32, 44, 56],
  pumpkins: [7, 19, 31, 43, 55],
  watermelons: [6, 18, 30, 42, 54],
  carrots: [5, 17, 29, 41, 53],
};

let player;
let playerId = 4;
function preload() {
  tilesetArtwork = loadImage("fullTileset.png");
  cropsArtwork = loadImage("crops.png");
}

function setup() {
  canvas = createCanvas(640, 640).id("canvas");
  canvas.parent("#game");
  background(128);

  // create our player
  player = new Player(width / 2, height / 2);
  setPlantWorld();
}

function draw() {
  // draw the bkworld and the character
  background(255);
  drawbkworld();

  // the character will always be drawn in the middle of the screen
  player.moveAndDisplay();

  fill(256);
  textSize(20);
  text("growing : " + player.currentSeed, 10, 15);
  textSize(12);
  text("wheat: " + inventory["wheat"], 10, 30);
  text("tomatoes: " + inventory["tomatoes"], 10, 40);
  text("lettuce: " + inventory["lettuce"], 10, 50);
  text("carrots: " + inventory["carrots"], 10, 60);
  text("strawberries: " + inventory["strawberries"], 10, 70);
  text("watermelons: " + inventory["watermelons"], 10, 80);
  text("pumpkin: " + inventory["pumpkins"], 10, 90);

  document.getElementById("wheat_inventory").innerHTML = inventory["wheat"];
  document.getElementById("tomato_inventory").innerHTML = inventory["tomatoes"];
  document.getElementById("lettuce_inventory").innerHTML = inventory["lettuce"];
  document.getElementById("carrot_inventory").innerHTML = inventory["carrots"];
  document.getElementById("strawberry_inventory").innerHTML = inventory["strawberries"];
  document.getElementById("watermelon_inventory").innerHTML = inventory["watermelons"];
  document.getElementById("pumpkin_inventory").innerHTML = inventory["pumpkins"];

}

// wheat, tomatoes, lettuce, carrots, strawberries, watermelons, pumpkin;

function wheat() {
  player.currentSeed = "wheat";
}

function tomatoes() {
  player.currentSeed = "tomatoes";
}

function lettuce() {
  player.currentSeed = "lettuce";
}
function carrots() {
  player.currentSeed = "carrots";
}
function strawberries() {
  player.currentSeed = "strawberries";
}
function watermelons() {
  player.currentSeed = "watermelons";
}
function pumpkins() {
  player.currentSeed = "pumpkins";
}

function drawbkworld() {
  for (let y = 0; y < bkworld.length; y++) {
    for (let x = 0; x < bkworld[y].length; x++) {
      let id = bkworld[y][x];

      drawTile(id, x * tileSize, y * tileSize);
    }
  }
  drawWorld();
}

function setPlantWorld() {
  for (let y = 0; y < world.length; y++) {
    let pCol = [];
    for (let x = 0; x < world[y].length; x++) {
      let id = world[y][x];

      let p = new Plant(y, x, id);
      pCol.push(p);
    }
    plantWorld.push(pCol);
  }
}

function drawWorld() {
  for (let y = 0; y < plantWorld.length; y++) {
    for (let x = 0; x < plantWorld[y].length; x++) {
      let p = plantWorld[y][x];
      p.display();
    }
  }
}

function drawTile(id, screenX, screenY) {
  let tilesPerRow = int(tilesetArtwork.width / tileSize);
  let imageX = int(id % tilesPerRow) * tileSize;
  let imageY = int(id / tilesPerRow) * tileSize;

  image(
    tilesetArtwork,
    screenX,
    screenY,
    tileSize,
    tileSize,
    imageX,
    imageY,
    tileSize,
    tileSize
  );
}

function drawCrop(id, screenX, screenY) {
  let tilesPerRow = int(cropsArtwork.width / tileSize);

  let imageX = int(id % tilesPerRow) * tileSize;
  let imageY = int(id / tilesPerRow) * tileSize;

  image(
    cropsArtwork,
    screenX,
    screenY,
    tileSize,
    tileSize,
    imageX,
    imageY,
    tileSize,
    tileSize
  );
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

function getPlant(screenX, screenY) {
  let arrayX = int(screenX / tileSize);
  let arrayY = int(screenY / tileSize);
  let p = plantWorld[arrayY][arrayX];
  return p;
}

function setPlant(screenX, screenY) {
  let p = getPlant(screenX, screenY);
  if (p.id == dirtId) {
    p.setSeed(player.currentSeed);
  }
}

function checkPlant(screenX, screenY) {
  let p = getPlant(screenX, screenY);
  // harvest if possible
  if (p.matured) {
    inventory[p.seedName]++;
    p.id = dirtId;
    p.seedPosition = -1;
    p.matured = false;
  }
}

function getState(screenX, screenY) {
  id = getTileAtPosition(screenX, screenY);
  if (id == 3) {
    return "walk";
  } else if (id == 12) {
    return "dirt";
  } else if (id == 50) {
    return "water";
  } else if (id > 5 && id != 49 && id != 51) {
    return "plant";
  }
}

class Plant {
  constructor(x, y, id) {
    this.arrayX = x;
    this.arrayY = y;
    this.graphic = "";
    this.growthTime = 50;
    this.currentGrowth = this.growthTime + 1;
    this.id = id;
    this.matured = false;
    this.seedPosition = -1;
  }

  setId(id) {
    if (this.seedPosition >= 4) {
      this.matured = true;
    } else {
      this.id = id;
    }
  }

  setSeed(id) {
    this.seedName = player.currentSeed;
    this.grow();
    this.currentGrowth = 0;
  }

  grow() {
    this.seedPosition++;
    this.setId(crops[this.seedName][this.seedPosition]);
  }

  display() {
    if (this.currentGrowth == this.growthTime) {
      // grow here.
      if (this.seedPosition != -1 && !this.matured) {
        this.grow();
      }
      this.currentGrowth = 0;
    }
    this.currentGrowth++;
    if (this.seedPosition != -1) {
      drawTile(dirtId, this.arrayY * tileSize, this.arrayX * tileSize);
    }
    drawTile(this.id, this.arrayY * tileSize, this.arrayX * tileSize);
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.water = false;
    this.currentSeed = "wheat";
  }

  computeSensors() {
    this.middleX = int(this.x + tileSize / 2);
    this.middleY = int(this.y + tileSize / 2);
    this.left = int(this.x - 2);
    this.right = int(this.x + tileSize + 2);
    this.up = int(this.y - 2);
    this.down = int(this.y + tileSize + 2);
  }

  plant() {
    this.computeSensors();

    if (getState(this.right, this.middleY) == "dirt") {
      setPlant(this.right, this.middleY);
    }

    if (getState(this.left, this.middleY) == "dirt") {
      setPlant(this.left, this.middleY);
    }

    if (getState(this.middleX, this.up) == "dirt") {
      setPlant(this.middleX, this.up);
    }

    if (getState(this.middleX, this.down) == "dirt") {
      setPlant(this.middleX, this.down);
    }

    if (getState(this.right, this.middleY) == "plant") {
      checkPlant(this.right, this.middleY);
    }

    if (getState(this.left, this.middleY) == "plant") {
      checkPlant(this.left, this.middleY);
    }

    if (getState(this.middleX, this.up) == "plant") {
      checkPlant(this.middleX, this.up);
    }

    if (getState(this.middleX, this.down) == "plant") {
      checkPlant(this.middleX, this.down);
    }
  }

  getWater() {
    this.computeSensors();
    if (getState(this.right, this.middleY) == "water") {
      this.water = true;
    }

    if (getState(this.left, this.middleY) == "water") {
      this.water = true;
    }

    if (getState(this.middleX, this.up) == "water") {
      this.water = true;
    }

    if (getState(this.middleX, this.down) == "water") {
      this.water = true;
    }
  }

  moveAndDisplay() {
    this.computeSensors();

    // Right
    if (keyIsDown(68)) {
      ellipse(this.right, this.middleY, 5, 5);
      let id = getTileAtPosition(this.right, this.middleY);
      if (
        getState(this.right, this.middleY) == "walk" &&
        this.x < width - tileSize
      ) {
        this.x += this.speed;
      }
    }
    // Left
    if (keyIsDown(65)) {
      ellipse(this.left, this.middleY, 5, 5);
      let id = getTileAtPosition(this.left, this.middleY);

      if (getState(this.left, this.middleY) == "walk" && this.x > 0) {
        this.x -= this.speed;
      }
    }
    // Up
    if (keyIsDown(87)) {
      ellipse(this.middleX, this.up, 5, 5);
      if (getState(this.middleX, this.up) == "walk" && this.y > 0) {
        this.y -= this.speed;
      }
    }
    // Down
    if (keyIsDown(83)) {
      ellipse(this.middleX, this.down, 5, 5);
      let id = getTileAtPosition(this.middleX, this.down);
      if (
        getState(this.middleX, this.down) == "walk" &&
        this.y < height - (tileSize + this.speed)
      ) {
        this.y += this.speed;
      }
    }
    drawTile(playerId, this.x, this.y);
  }
}
