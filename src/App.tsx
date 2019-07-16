import './App.css';
import React, { useState } from 'react';

import { recipes } from 'data';
import { RecipeList } from 'organisms/RecipeList/RecipeList';
import { Container } from '@material-ui/core';
import { IngredientsChips } from 'molecules/IngredientsChips';

function uniq(array: string[]): string[] {
  return Array.from(new Set(array)).filter((item) => !!item);
}

const App: React.SFC = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([...recipes]);

  const handleIngredientsChange = (ingredients: string[]) => {
    const filtered = recipes.filter((recipe) => {
      const flatIngredients = uniq(
        recipe.ingredients.reduce(
          (prev, cur: any) => {
            prev.push(cur.ingredient ? cur.ingredient : undefined);

            return prev;
          },
          [] as string[],
        ),
      );

      const containSelectedIngredients = ingredients.length
        ? ingredients.some((ing) => flatIngredients.includes(ing))
        : true;

      return containSelectedIngredients;
    });

    setFilteredRecipes(filtered);
  };

  console.log(filteredRecipes);

  return (
    <div className="App">
      <Container fixed>
        <IngredientsChips onChange={handleIngredientsChange} />
        <RecipeList recipes={filteredRecipes} />
      </Container>
    </div>
  );
};

export default App;
