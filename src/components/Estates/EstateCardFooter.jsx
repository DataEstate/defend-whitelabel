// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActions,
  Button,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonSection: {
    marginLeft: 16
  },
  estateButton: {
    marginRight: 20,
    width: 78,
    height: 28,
    borderRadius: 0
  },
  estateButtonLabel: {
    ...theme.typography.h3,
    fontSize: 8,
    textTransform: "capitalize"
  }
}));

type Props = {
  onReadMore?: any,
  onBookNow?: any
};

export const EstateCardFooter = ({ onReadMore, onBookNow }: Props) => {
  const classes = useStyles();
  
  return (
    <CardActions>
      <Grid container justify="flex-start" alignItems="flex-end" spacing={2}>
        <div className={classes.buttonSection}>
          <Button
            variant="contained"
            color="primary"
            classes={{
              root: classes.estateButton,
              label: classes.estateButtonLabel
            }}
            onClick={onReadMore}
          >
            Read More
          </Button>
          <Button
            variant="contained"
            color="primary"
            classes={{
              root: classes.estateButton,
              label: classes.estateButtonLabel
            }}
            onClick={onBookNow}
          >
            Book Direct
          </Button>
        </div>
      </Grid>
    </CardActions>
  );
};

export default EstateCardFooter;
