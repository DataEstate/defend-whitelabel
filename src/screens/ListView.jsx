import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
export const ListView = () => (
  <div>
    <Typography variant='h3'>{'This is ListView page'}</Typography>
    <Link to='/'>
      <Button
        variant='contained'
        color='primary'
        href='#contained-buttons'
        style={{ marginBottom: 10 }}
      >
        Back to Home Page
      </Button>
    </Link>
  </div>
);
export default ListView;
