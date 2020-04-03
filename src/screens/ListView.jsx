// @flow
import React from 'react';
import classnames from "classnames";
import { Button, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { EstatesContainer } from 'src/containers';
import { EstatesProvider } from "src/context/Estates";

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(1)
  }
}));

export const ListView = () => {
  const classes = useStyles();

  return (
    <div id="ListViewScreen">
      <Typography variant="h3">{"This is ListView page"}</Typography>
      <EstatesProvider>
        <EstatesContainer />
      </EstatesProvider>
      <Link className={classnames("Navigation__Link", "to-Home")} to="/">
        <Button variant="contained" color="primary" className={classes.button}>
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};
export default ListView;
