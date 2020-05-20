// @flow
import React from "react";
import classnames from "classnames";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { EstatesContainer } from "src/containers";
import { EstatesProvider } from "src/context/Estates";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));

export const ListView = () => {
  const classes = useStyles();

  return (
    <div id="ListViewScreen">
      <EstatesProvider>
        <EstatesContainer />
      </EstatesProvider>
    </div>
  );
};
export default ListView;
