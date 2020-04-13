// @flow

import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.dataEstateBlue,
    padding: 9,
    height: 38
  },
}));

type Props = {
  children?: React.Node
};

export const EstateCardStatusBar = (props: Props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
};

export default EstateCardStatusBar;
