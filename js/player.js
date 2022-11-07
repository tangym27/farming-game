class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.water = false;
    this.currentSeed = "potatoes";
    this.graphicOffset = 0;
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

    switch (this.direction) {
      case "up":
        let state = getState(this.middleX, this.up);
        switch (state) {
          case "dirt":
            setPlant(this.middleX, this.up);
            break;
          case "plant":
            checkPlant(this.middleX, this.up);
            break;
          case "water":
            this.water = true;
            break;
          case "food":
            finishCooking(this.middleX, this.up);
            break;
          case "stove":
            openMenu();
            break;
        }
        break;
      case "down":
        switch (getState(this.middleX, this.down)) {
          case "dirt":
            setPlant(this.middleX, this.down);
            break;
          case "plant":
            checkPlant(this.middleX, this.down);
            break;
          case "water":
            this.water = true;
            break;
          case "food":
            finishCooking(this.middleX, this.down);
            break;
          case "stove":
            openMenu();
            break;
        }
        break;
      case "left":
        switch (getState(this.left, this.middleY)) {
          case "dirt":
            setPlant(this.left, this.middleY);
            break;
          case "plant":
            checkPlant(this.left, this.middleY);
            break;
          case "water":
            this.water = true;
            break;
          case "food":
            finishCooking(this.left, this.middleY);
            break;
          case "stove":
            openMenu();
            break;
        }
        break;
      case "right":
        switch (getState(this.right, this.middleY)) {
          case "dirt":
            setPlant(this.right, this.middleY);
            break;
          case "plant":
            checkPlant(this.right, this.middleY);
            break;
          case "water":
            this.water = true;
            break;
          case "food":
            finishCooking(this.right, this.middleY);
            break;
          case "stove":
            openMenu();
            break;
        }
        break;
    }
  }

  moveAndDisplay() {
    this.computeSensors();

    // Right
    if (keyIsDown(68)) {
      let id = getTileAtPosition(this.right, this.middleY);
      if (
        getState(this.right, this.middleY) == "walk" &&
        this.x < width - tileSize
      ) {
        this.x += this.speed;
      }
      this.graphic = [1, 5, 9][this.graphicOffset];
      this.direction = "right";
    }
    // Left
    if (keyIsDown(65)) {
      let id = getTileAtPosition(this.left, this.middleY);

      if (getState(this.left, this.middleY) == "walk" && this.x > 0) {
        this.x -= this.speed;
      }
      this.graphic = [3, 7, 11][this.graphicOffset];
      this.direction = "left";
    }
    // Up
    if (keyIsDown(87)) {
      if (getState(this.middleX, this.up) == "walk" && this.y > 0) {
        this.y -= this.speed;
      }
      this.graphic = [2, 6, 10][this.graphicOffset];
      this.direction = "up";
    }
    // Down
    if (keyIsDown(83)) {
      let id = getTileAtPosition(this.middleX, this.down);
      if (
        getState(this.middleX, this.down) == "walk" &&
        this.y < height - (tileSize + this.speed)
      ) {
        this.y += this.speed;
      }
      this.graphic = [0, 4, 8][this.graphicOffset];
      this.direction = "down";
    }

    this.graphicOffset++;
    if (this.graphicOffset == 3) {
      this.graphicOffset = 0;
    }
    drawPlayer(this.graphic, this.x, this.y);

    if (this.y < 80 || this.y > 110 || this.x < 60 || this.x > 180) {
      recipe_book.classList.add("hidden");
    }
  }
}
