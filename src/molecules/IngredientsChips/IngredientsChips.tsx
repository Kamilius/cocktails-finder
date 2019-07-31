import React, { useState } from 'react';
import { Theme, FormControl, InputLabel, Select, Chip, MenuItem, Input, useTheme } from '@material-ui/core';

import { ingredients } from 'data';

import { MenuProps, useStyles } from './IngredientsChipts.style';

type Props = {
  onChange(selectedIngredients: string[]): void;
};

function getStyles(ingredient: string, ingredientsList: string[], theme: Theme) {
  return {
    fontWeight:
      ingredientsList.indexOf(ingredient) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const IngredientsChips: React.SFC<Props> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="select-multiple-chip">Ingredients</InputLabel>
      <Select
        multiple
        value={selectedIngredients}
        onChange={(event) => {
          const value = event.target.value;

          setSelectedIngredients(value as string[]);
          props.onChange(value as string[]);
        }}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {(selected as string[]).map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {ingredients.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, selectedIngredients, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
