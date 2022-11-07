let tileSize = 32;
let dirtId = 12;

// stove is 48 + 49
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
  [37, 3, 3, 3, 3, 3, 3, 37, 36, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [37, 3, 38, 38, 38, 38, 3, 37, 36, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [37, 3, 48, 48, 48, 48, 3, 37, 36, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [37, 3, 3, 3, 3, 3, 3, 37, 36, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
  [24, 25, 26, 3, 3, 24, 25, 25, 26, 3, 3, 3, 12, 12, 3, 3, 12, 12, 3, 3],
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

let plantWorld = [];

let crops = {
  potatoes: [11, 23, 35, 47, 59],
  strawberries: [10, 22, 34, 46, 58],
  tomatoes: [9, 21, 33, 45, 57],
  lettuce: [8, 20, 32, 44, 56],
  pumpkins: [7, 19, 31, 43, 55],
  watermelons: [6, 18, 30, 42, 54],
  carrots: [5, 17, 29, 41, 53],
};

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

function drawPlayer(id, screenX, screenY) {
  let tilesPerRow = int(characterArtwork.width / tileSize);
  let imageX = int(id % tilesPerRow) * tileSize;
  let imageY = int(id / tilesPerRow) * tileSize;

  image(
    characterArtwork,
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

function drawRecipe(id, screenX, screenY, progress) {
  let tilesPerRow = int(foodArtwork.width / tileSize);
  let imageX = int(id % tilesPerRow) * tileSize;
  let imageY = int(id / tilesPerRow) * tileSize;

  image(
    foodArtwork,
    screenX,
    screenY,
    tileSize * progress,
    tileSize * progress,
    imageX,
    imageY,
    tileSize,
    tileSize
  );
}

function getState(screenX, screenY) {
  id = getTileAtPosition(screenX, screenY);

  if (id == 3) {
    return "walk";
  } else if (id == 12) {
    return "dirt";
  } else if (id == 50) {
    return "water";
  } else if (id == 38) {
    return "food";
  } else if (id == 48) {
    return "stove";
  } else if (id > 5 && id != 49 && id != 51) {
    return "plant";
  }
}
