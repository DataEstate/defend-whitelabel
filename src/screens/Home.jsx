// @flow

import React from "react";
import classnames from "classnames";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <div id="HomeScreen">
      <Typography variant="h3">{"This is Home page"}</Typography>
    </div>
  );
};

export default Home;
