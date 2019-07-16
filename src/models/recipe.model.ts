import { Ingredient, Category } from 'models';

export interface Recipe {
  id?: string;
  name: string;
  glass: string;
  category?: Category;
  ingredients: Ingredient[];
  preparation?: string;
  garnish?: string;
}
