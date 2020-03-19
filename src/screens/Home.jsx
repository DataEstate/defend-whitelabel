// @flow

import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { SampleContainer } from "src/containers";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(1)
  }
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3">{"This is Home page"}</Typography>
      <Link to="/listview">
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          className={classes.button}
        >
          Link to ListView
        </Button>
        <SampleContainer></SampleContainer>
      </Link>
    </div>
  );
};

export default Home;
