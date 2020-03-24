import React from "react";
import classnames from "classnames";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
      <Link className={classnames("Navigation__Link", "to-Home")} to="/">
        <Button variant="contained" color="primary" className={classes.button}>
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};
export default ListView;
