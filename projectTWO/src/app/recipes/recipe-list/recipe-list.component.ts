import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'
    ),
    new Recipe(
      'A test recipe',
      'this is a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
