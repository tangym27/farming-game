let stoves = [];

class Stove {
  constructor(x, y) {
    this.on = false;
    this.id = 48;
    this.x = x;
    this.y = y;
    this.progress = 0.5;
  }

  cook(recipe) {
    this.on = true;
    this.id = 49;
    this.recipe = recipe;
    this.progress = 0.5;
  }

  turnOff() {
    this.on = false;
    this.id = 48;

    profit += this.recipe.price;
  }

  displayCookingProgress() {
    drawRecipe(
      this.recipe.id,
      this.x * tileSize,
      (this.y - 1) * tileSize,
      this.progress
    );
    this.progress += 0.005;
    if (this.progress > 1) this.progress = 1;
  }
}

function setupStoves() {
  for (let x = 2; x < 5; x++) {
    let temp = new Stove(x, 2);
    stoves.push(temp);
  }
}

function displayStoves() {
  for (stove of stoves) {
    drawTile(stove.id, stove.x * tileSize, stove.y * tileSize);
    if (stove.on) {
      stove.displayCookingProgress();
    }
  }
}

function cookOnStove(recipe) {
  let stoveNum = constrain(int(player.x / 32) - 1, 0, stoves.length - 1);
  let stove = stoves[stoveNum];
  if (stove.on) {
    return false;
  } else {
    stove.cook(recipe);
    return true;
  }
}

function finishCooking(screenX, screenY) {
  let stoveNum = int(screenX / 32) - 2;
  if (stoves[stoveNum].on && stoves[stoveNum].progress >= 1) {
    stoves[stoveNum].turnOff();
  }
}
