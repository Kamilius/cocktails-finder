import { Unit } from 'models';

export interface Ingredient {
  id?: string;
  ingredient?: string;
  amount?: number;
  unit?: Unit;
  label?: string;
  special?: string;
}
