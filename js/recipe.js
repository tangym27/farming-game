class Recipe {
  // ingredients will be an object like {pumpkin: 2, milk: 1}
  constructor(name, ingredients, price) {
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
    for (let i of this.ingredientList) {
      inventory[i] -= this.ingredients[i];
    }
    profit += this.price;
  }
}

let recipes = [];

function setupRecipes() {
  let recipesData = {
    "baked potatoes": [{ potatoes: 2 }, 8],
    "strawberry jam": [{ strawberries: 3 }, 10],
    "sliced watermelons": [{ watermelons: 1 }, 5],
    "salad": [{ lettuce: 1, carrots: 1, tomatoes: 9 }],
    "kebabs": [{ carrots: 1, pumpkins: 1, watermelons: 11 }],
    "sandwich": [{ potatoes: 2, lettuce: 1, tomatoes: 7 }],
    "pumpkin pie": [{ potatoes: 2, pumpkins: 18 }],
    "carrot cake": [{ potatoes: 2, carrots: 20 }]
  };

  for (const [key, value] of Object.entries(recipesData)) {
    let recipe = new Recipe(key, value[0], value[1]);
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
