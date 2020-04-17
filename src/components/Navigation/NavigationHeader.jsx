// @flow

import * as React from "react";
import classnames from "classnames";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

type Props = {
  title?: string,
  children?: React.Node,
};

export const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: theme.typography.fontFamily,
  },
  title: {
    fontSize: "1.4em",
  },
  menuItems: {
    display: "flex",
    padding: `0px ${theme.spacing(2)}px`,
  },
}));

export const NavigationHeader = ({ title = "", children }: Props) => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <div className={classnames("Navigation__menuItems", classes.menuItems)}>
          {children}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationHeader;
