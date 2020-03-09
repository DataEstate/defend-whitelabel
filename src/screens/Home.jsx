// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export const Home = () => (
  <div>
    <Typography variant='h3'>{'This is Home page'}</Typography>
    <Link to='/listview'>
      <Button
        variant='contained'
        color='primary'
        href='#contained-buttons'
        style={{ marginBottom: 10 }}
      >
        Link to ListView
      </Button>
    </Link>
  </div>
);

export default Home;
