let recipes = [];

class Recipe {
<<<<<<< HEAD
=======
  // ingredients will be an object like {pumpkin: 2, milk: 1}
>>>>>>> main
  constructor(id, name, ingredients, price) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;

    this.ingredientList = Object.keys(ingredients);
    this.price = price;
  }

  canCook(inventory) {
    for (let i of this.ingredientList) {
      if (this.ingredients[i] > inventory[i]) {
        return false;
      }
    }
    return true;
  }

  cook(inventory) {
    if (cookOnStove(this)) {
      for (let i of this.ingredientList) {
        inventory[i] -= this.ingredients[i];
      }
      cant_bake.classList.add("hidden");
      return true;
    }
    cant_bake.classList.remove("hidden");
    return false;
  }
}

function setupRecipes() {
  let recipesData = {
    "baked potatoes": [8, { potatoes: 2 }, 8],
    "strawberry jam": [14, { strawberries: 3 }, 10],
    "sliced watermelons": [0, { watermelons: 1 }, 5],
    salad: [10, { lettuce: 1, carrots: 1, tomatoes: 1 }, 9],
    kebabs: [12, { carrots: 1, pumpkins: 1, watermelons: 1 }, 11],
    sandwich: [13, { potatoes: 2, lettuce: 1, tomatoes: 1 }, 7],
    "pumpkin pie": [1, { potatoes: 2, pumpkins: 1 }, 18],
    "carrot cake": [2, { potatoes: 2, carrots: 2 }, 18],
  };

  for (const [key, value] of Object.entries(recipesData)) {
    let recipe = new Recipe(value[0], key, value[1], value[2]);
    recipes.push(recipe);
  }
}

// given a recipe name, return the recipe object
function getRecipe(name) {
  for (recipe of recipes) {
    if (recipe.name == name) {
      return recipe;
    }
  }
  return false;
}

function displayRecipes() {
  for (let i = 0; i < 4; i++) {
    let r = recipes[i];
    drawRecipe(r.id, 1, tileSize * i, 0.9);
  }
  for (let i = 0; i < 4; i++) {
    let r = recipes[i + 4];
    drawRecipe(r.id, tileSize * 7 + 3, tileSize * i, 0.9);
  }
}
