import React, { useState } from 'react';
import {
  createStyles,
  Theme,
  makeStyles,
  Paper,
  Typography,
  Divider,
  GridList,
  GridListTile,
  ListSubheader,
} from '@material-ui/core';
import LazyLoad from 'react-lazyload';

import { RecipeTile } from 'molecules/RecipeTile/RecipeTile';
import { Recipe } from 'models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    details: {
      maxWidth: '500px',
      padding: theme.spacing(3, 2),
    },
    divider: {
      margin: '16px',
    },
    image: {
      float: 'left',
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
  }),
);

type Props = {
  recipes: Recipe[];
};

export const RecipeList: React.SFC<Props> = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const classes = useStyles();

  const getRecipesTiles = (recipesList: Recipe[]) =>
    recipesList.map((recipe) => (
      <RecipeTile
        onClick={() => setSelectedRecipe(recipe)}
        key={recipe.name}
        img={recipe.image ? recipe.image : ''}
        name={recipe.name}
        category={recipe.category}
      />
    ));

  return (
    <div className={classes.root}>
      {!!selectedRecipe ? (
        <Paper className={classes.details}>
          <div>
            <LazyLoad height={163}>
              <img className={classes.image} src={selectedRecipe.image || ''} alt={selectedRecipe.name} />
            </LazyLoad>
            <div>
              <Typography variant="h5" component="h3">
                {selectedRecipe.name}
              </Typography>
              <Typography component="ul">Ingredients:</Typography>
              {selectedRecipe.ingredients.map(({ ingredient, special, amount, unit }) => (
                <Typography key={ingredient} component="li">
                  {ingredient || special} {amount}
                  {unit}
                </Typography>
              ))}
            </div>
          </div>
          <Divider className={classes.divider} variant="middle" />
          <Typography component="p">{selectedRecipe.preparation}</Typography>
        </Paper>
      ) : null}
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Cocktails list</ListSubheader>
        </GridListTile>
        {getRecipesTiles(recipes)}
      </GridList>
    </div>
  );
};
