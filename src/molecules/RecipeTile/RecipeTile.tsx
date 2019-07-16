import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Category } from 'models';

const useStyles = makeStyles({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

type Props = {
  img: string;
  name: string;
  category?: Category;
};

export const RecipeTile: React.SFC<Props> = ({ img, name, category }) => {
  const classes = useStyles();

  return (
    <GridListTile key={name}>
      <img src={img} alt={name} />
      <GridListTileBar
        title={name}
        subtitle={<span>{category}</span>}
        actionIcon={<IconButton aria-label={`info about ${name}`} className={classes.icon} />}
      />
    </GridListTile>
  );
};
