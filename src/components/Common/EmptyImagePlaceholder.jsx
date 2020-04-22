// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhotoIcon from '@material-ui/icons/Photo';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: props => props.height,
    display: "flex",
    backgroundColor: theme.palette.grey[400],
  },
}));

type Props = {
  height?: string
};

export const EmptyImagePlaceholder = ({ height = '100px' } : Props) => {
  const classes = useStyles({ height });

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item>
          <PhotoIcon />
        </Grid>
      </Grid>
    </div>
  );
};

export default EmptyImagePlaceholder;
