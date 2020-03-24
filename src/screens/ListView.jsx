// @flow
import React from 'react';
import { Estate, EstateCards } from '../components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(1)
  }
}));

const stubData: Array<typeof Estate> = [
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
    <div>
      <EstateCards estateData={stubData} />
      <Link to='/'>
        <Button
          variant='contained'
          color='primary'
          href='#contained-buttons'
          className={classes.button}
        >
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};
export default ListView;
