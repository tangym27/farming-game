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
  } else if (player.water) {
    let remainingTime = p.growthTime - p.currentGrowth;
    p.currentGrowth += remainingTime / 2;
    player.water = false;
  }
}

class Plant {
  constructor(x, y, id) {
    this.arrayX = x;
    this.arrayY = y;
    this.graphic = "";
    this.growthTime = 500;
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
    if (this.seedPosition != -1 && this.currentGrowth >= this.growthTime) {
      // grow here.
      if (!this.matured) {
        this.grow();
      }
      this.currentGrowth = 0;
    }
    this.currentGrowth++;
    if (this.seedPosition != -1) {
      drawTile(dirtId, this.arrayY * tileSize, this.arrayX * tileSize);
      // text(
      //   "growthTime left: " + (this.growthTime - this.currentGrowth),
      //   this.arrayY * tileSize,
      //   this.arrayX * tileSize
      // );
    }
    drawTile(this.id, this.arrayY * tileSize, this.arrayX * tileSize);
  }
}
