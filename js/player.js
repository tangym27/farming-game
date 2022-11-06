class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.water = false;
    this.currentSeed = "potatoes";
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
    } else if (getState(this.left, this.middleY) == "dirt") {
      setPlant(this.left, this.middleY);
    } else if (getState(this.middleX, this.up) == "dirt") {
      setPlant(this.middleX, this.up);
    } else if (getState(this.middleX, this.down) == "dirt") {
      setPlant(this.middleX, this.down);
    } else if (getState(this.right, this.middleY) == "plant") {
      checkPlant(this.right, this.middleY);
    } else if (getState(this.left, this.middleY) == "plant") {
      checkPlant(this.left, this.middleY);
    } else if (getState(this.middleX, this.up) == "plant") {
      checkPlant(this.middleX, this.up);
    } else if (getState(this.middleX, this.down) == "plant") {
      checkPlant(this.middleX, this.down);
    } else if (getState(this.right, this.middleY) == "water") {
      this.water = true;
    } else if (getState(this.left, this.middleY) == "water") {
      this.water = true;
    } else if (getState(this.middleX, this.up) == "water") {
      this.water = true;
    } else if (getState(this.middleX, this.down) == "water") {
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
