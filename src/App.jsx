// @flow

/**
 * <App/>
 * This is the main web application to be mounted.
 * @author Rolf Chen <rolf.chen@dataestate.com.au>
 */

import React, { useContext } from "react";
import classnames from "classnames";
import { BrowserRouter, Route, Link } from "react-router-dom";

import {
  useTheme,
  makeStyles,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import { ConfigurationContext } from "src/context";
import { SampleContainer } from "src/containers";
import { Home } from "./screens/Home";
import { ListView } from "./screens/ListView";
type AppProps = {
  id?: string,
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    main: {
      fontFamily: theme.typography.fontFamily,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  };
});

export const App = ({ id }: AppProps) => {
  const classes = useStyles();

  const { site } = useContext(ConfigurationContext);
  return (
    <BrowserRouter>
      <div className={classnames("MainApp", classes.main)}>
        <Typography variant="h2">{site.title}</Typography>
        <Route path="/" exact component={Home}></Route>
        <Route path="/listview" exact component={ListView}></Route>
        <SampleContainer></SampleContainer>
      </div>
    </BrowserRouter>
  );
};

export default App;
