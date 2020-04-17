// @flow

/**
 * <App/>
 * This is the main web application to be mounted.
 * @author Rolf Chen <rolf.chen@dataestate.com.au>
 */

import React, { useContext, Fragment } from "react";
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

import { NavigationHeader, NavigationItem } from "src/components";
type AppProps = {
  id?: string,
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
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

  const submenus = [
    {
      to: "/list",
      name: "List",
    },
  ];

  return (
    <BrowserRouter>
      <div className="test-app">
        <CssBaseline />
        <NavigationHeader title={site.title}>
          <Fragment>
            <NavigationItem to="/" name="Home" />
            <NavigationItem name="Estates" submenu={submenus} />
          </Fragment>
        </NavigationHeader>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/list" exact>
          <ListView />
        </Route>
        <SampleContainer></SampleContainer>
      </div>
    </BrowserRouter>
  );
};

export default App;
