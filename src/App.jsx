// @flow

/**
 * <App/>
 * This is the main web application to be mounted.
 * @author Rolf Chen <rolf.chen@dataestate.com.au>
 */

import React, { useContext } from "react";
import classnames from "classnames";
import {
  useTheme,
  makeStyles,
  Typography,
  CssBaseline,
  Button
} from "@material-ui/core";
import { ConfigurationContext } from "src/context";

type AppProps = {
  id?: string
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
  };
});

export const App = ({ id }: AppProps) => {
  const classes = useStyles();

  const { site, navigation } = useContext(ConfigurationContext);
  return <div>Test App</div>;
};

export default App;
