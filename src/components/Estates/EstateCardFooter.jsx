// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActions,
  Button,
  Grid
} from "@material-ui/core";
import type { EstateType } from "src/context/Estates/Types/Data/EstateType";
import EstateImageContainer from "./EstateImageContainer";

const useStyles = makeStyles({
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
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 8,
    textTransform: "capitalize"
  }
});

type Props = {
  onReadMore?: any,
  onBookNow?: any
};

export const EstateCardFooter = ({ onReadMore, onBookNow }: Props) => {
  const classes = useStyles();
  
  return (
    <CardActions>
      <Grid container justify="flex-start" alignItems="center" spacing={2}>
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
