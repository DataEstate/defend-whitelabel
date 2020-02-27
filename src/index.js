// @flow

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { App } from "./App";
import { AppStateProvider, ConfigurationProvider } from "./context";
import { getDefaultAppState } from "./helpers";
import history from "./utils/history";
import { theme as themeConfig, config } from "./configs/DataEstate";

const appContainer = document.getElementById("root");
const theme = createMuiTheme(themeConfig);
if (appContainer !== null) {
  render(
    <ThemeProvider theme={theme}>
      <ConfigurationProvider config={config}>
        <AppStateProvider store={getDefaultAppState()}>
          <App />
        </AppStateProvider>
      </ConfigurationProvider>
    </ThemeProvider>,
    appContainer
  );
}
