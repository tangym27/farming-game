// Inventory Variables
const inventory_panel = document.getElementById("inventory_panel");
const inventory = document.getElementById("inventory");
const seeds = document.getElementById("seeds");
const tools = document.getElementById("tools");

// Farming Variables
let tilesetArtwork;
let cropsArtwork;
let tileSize = 32;

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
  [23, 23, 23, 23, 23, 23, 23, 23, 21, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [23, 23, 23, 23, 23, 23, 23, 23, 21, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [23, 23, 23, 23, 23, 23, 23, 23, 21, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [21, 21, 21, 3, 3, 21, 21, 21, 21, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 5, 5, 3, 3, 5, 5, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 22, 22, 22, 22, 22, 22, 22, 22, 3],
  [3, 3, 5, 5, 3, 3, 5, 5, 3, 3, 3, 22, 22, 22, 22, 22, 22, 22, 22, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

let plantWorld = [];
let player;
let playerId = 4;
function preload() {
  tilesetArtwork = loadImage("tileset.png");
  cropsArtwork = loadImage("crops.png");
}

function setup() {
  createCanvas(640, 640);
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
  textSize(30);
  text("water: " + player.water, 10, 20);
}

function growPlants() {
  if (frameCount % 80 == 0) {
    for (let y = 0; y < plantWorld.length; y++) {
      for (let x = 0; x < plantWorld[y].length; x++) {
        let p = plantWorld[y][x];
        if (p.id > 5) p.setId(p.id + 1);
      }
    }
  }
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
  let id = world[arrayY][arrayX];
  return id;
}

function keyPressed() {
  if (key == " ") {
    player.plant();
    player.getWater();
  }
  if (key == "i") {
    if (inventory_panel.classList.contains("hidden")) {
      inventory_panel.classList.remove("hidden");
    } else {
      inventory_panel.classList.add("hidden");
    }
  }
}

function setPlant(screenX, screenY) {
  let arrayX = int(screenX / tileSize);
  let arrayY = int(screenY / tileSize);
  let p = plantWorld[arrayY][arrayX];
  if (p.id == 5) p.setId(p.id + 1);
}

function getState(screenX, screenY) {
  id = getTileAtPosition(screenX, screenY);
  if (id == 3) {
    return "walk";
  } else if (id == 5) {
    return "dirt";
  } else if (id == 22) {
    return "water";
  }
}

class Plant {
  constructor(x, y, id) {
    this.arrayX = x;
    this.arrayY = y;
    this.graphic = "";
    this.growthTime = 60;
    this.currentGrowth = 0;
    this.id = id;
  }

  setId(id) {
    if (id < 10) this.id = id;
  }

  display() {
    // something has been planted
    if (this.id > 5) {
      if (this.currentGrowth == this.growthTime) {
        this.setId(this.id + 1);
        this.currentGrowth = 0;
      }
      this.currentGrowth++;
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
