import { Unit } from 'models';

interface SpecialIngredient {
  special?: string;
}

interface BasicIngredient {
  id?: string;
  ingredient: string;
  amount: number;
  unit: Unit;
  label?: string;
}

export type Ingredient = BasicIngredient | SpecialIngredient;
