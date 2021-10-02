import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'this is a test 1',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'this is a test 2',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'
    ),
  ];

  getRecipes() {
    //to get only the value, without reference
    return this.recipes.slice();
  }

  recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
