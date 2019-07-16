import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
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
    gridList: {
      width: '100%',
      height: '100%',
    },
  }),
);

type Props = {
  recipes: Recipe[];
};

const getRecipesTiles = (recipes: Recipe[]) =>
  recipes.map((recipe) => (
    <RecipeTile key={recipe.name} img="http://lorempixel.com/300/400" name={recipe.name} category={recipe.category} />
  ));

export const RecipeList: React.SFC<Props> = ({ recipes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Cocktails list</ListSubheader>
        </GridListTile>
        {getRecipesTiles(recipes)}
      </GridList>
    </div>
  );
};
