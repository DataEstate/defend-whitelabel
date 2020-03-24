// @flow
import React from 'react';
import classnames from "classnames";
import { Button, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Estate, EstateCards } from '../components';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(1)
  }
}));

const stubData: Array<Estate> = [
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
  {
    id: 'AAA',
    name: 'Estate 1',
    state_code: 'State Code 1',
    category: 'Category 1',
    locality: 'Locality 1',
    description: 'Description 1'
  },
];

export const ListView = () => {
  const classes = useStyles();

  return (
    <div id="ListViewScreen">
      <Typography variant="h3">{"This is ListView page"}</Typography>
      <EstateCards estateData={stubData} />
      <Link className={classnames("Navigation__Link", "to-Home")} to="/">
        <Button variant="contained" color="primary" className={classes.button}>
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};
export default ListView;
