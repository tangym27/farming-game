let tilesetArtwork;

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

let player;
let playerId = 4;
function preload() {
  tilesetArtwork = loadImage("tileset.png");
}

function setup() {
  createCanvas(640, 640);
  background(128);

  // create our player
  player = new Player(width / 2, height / 2);
}

function draw() {
  // draw the bkworld and the character
  background(0);
  push();
  drawbkworld();
  pop();

  // the character will always be drawn in the middle of the screen
  player.moveAndDisplay();
}

// draw the entire bkworld using the 2D array above
function drawbkworld() {
  for (let y = 0; y < bkworld.length; y++) {
    for (let x = 0; x < bkworld[y].length; x++) {
      // extract the tile here
      let id = bkworld[y][x];
      drawTile(id, x * tileSize, y * tileSize);
    }
  }
  drawWorld();
}

function drawWorld() {
  for (let y = 0; y < world.length; y++) {
    for (let x = 0; x < world[y].length; x++) {
      // extract the tile here
      let id = world[y][x];
      drawTile(id, x * tileSize, y * tileSize);
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

function getTileAtPosition(screenX, screenY) {
  let arrayX = int(screenX / tileSize);
  let arrayY = int(screenY / tileSize);
  let id = world[arrayY][arrayX];
  return id;
}

function keyPressed() {
  if (key == " ") {
    player.plant();
  }
}

function setPlant(screenX, screenY) {
  let arrayX = int(screenX / tileSize);
  let arrayY = int(screenY / tileSize);
  world[arrayY][arrayX] = 7;
}

function isWalkable(id) {
  if (id == 3) {
    return true;
  }
  return false;
}

function isDirt(id) {
  if (id == 5) {
    return true;
  }
  return false;
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
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

    if (isDirt(getTileAtPosition(this.right, this.middleY))) {
      setPlant(this.right, this.middleY);
    }

    if (isDirt(getTileAtPosition(this.left, this.middleY))) {
      setPlant(this.left, this.middleY);
    }

    if (isDirt(getTileAtPosition(this.middleX, this.up))) {
      setPlant(this.middleX, this.up);
    }

    if (isDirt(getTileAtPosition(this.middleX, this.down))) {
      setPlant(this.this.middleX, this.down);
    }
  }

  moveAndDisplay() {
    this.computeSensors();

    // Right
    if (keyIsDown(68)) {
      ellipse(this.right, this.middleY, 5, 5);
      let id = getTileAtPosition(this.right, this.middleY);
      if (isWalkable(id) && this.x < width - tileSize) {
        this.x += this.speed;
      }
    }
    // Left
    if (keyIsDown(65)) {
      ellipse(this.left, this.middleY, 5, 5);
      let id = getTileAtPosition(this.left, this.middleY);

      if (isWalkable(id) && this.x > 0) {
        this.x -= this.speed;
      }
    }
    // Up
    if (keyIsDown(87)) {
      ellipse(this.middleX, this.up, 5, 5);
      let id = getTileAtPosition(this.middleX, this.up);
      if (isWalkable(id) && this.y > 0) {
        this.y -= this.speed;
      }
    }
    // Down
    if (keyIsDown(83)) {
      ellipse(this.middleX, this.down, 5, 5);
      let id = getTileAtPosition(this.middleX, this.down);
      if (isWalkable(id) && this.y < height - (tileSize + this.speed)) {
        this.y += this.speed;
      }
    }
    drawTile(playerId, this.x, this.y);
  }
}
