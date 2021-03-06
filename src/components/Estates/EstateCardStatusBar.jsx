// @flow

import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    height: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

type Props = {
  children?: React.Node,
};

export const EstateCardStatusBar = ({ children }: Props) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default EstateCardStatusBar;
