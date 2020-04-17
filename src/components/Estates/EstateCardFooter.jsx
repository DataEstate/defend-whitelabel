// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActions,
  Button,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "55px",
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
  },
  buttonSection: {
    marginLeft: 16,
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

type EstateCardActionType = {
  name?: string, 
  color?: "primary" | "secondary" | string,
  onClick?: (e: any) => void,
  disabled?: boolean
}

type Props = {
  primaryAction: EstateCardActionType,
  secondaryAction: EstateCardActionType,
  buttons?: Array<EstateCardActionType>,
};

export const EstateCardFooter = ({ primaryAction, secondaryAction, buttons }: Props) => {
  const classes = useStyles();
  
  return (
    <CardActions className={classes.root}>
      <Grid container justify="flex-start" alignItems="flex-end" spacing={2}>
        <div className={classes.buttonSection}>
          <Button
            variant="contained"
            color={primaryAction.color}
            classes={{
              root: classes.estateButton,
              label: classes.estateButtonLabel
            }}
            onClick={primaryAction.onClick}
            disabled={primaryAction.disabled}
          >
            {primaryAction.name}
          </Button>
          <Button
            variant="contained"
            color={secondaryAction.color}
            classes={{
              root: classes.estateButton,
              label: classes.estateButtonLabel
            }}
            onClick={secondaryAction.onClick}
            disabled={secondaryAction.disabled}
          >
            {secondaryAction.name}
          </Button>
          {buttons && 
            buttons.map((button, index) => {
              return (
                <Button
                  variant="contained"
                  color={button.color}
                  classes={{
                    root: classes.estateButton,
                    label: classes.estateButtonLabel
                  }}
                  onClick={button.onClick}
                  disabled={button.disabled}
                >
                  {button.name}
                </Button>
              );
            })
          }
        </div>
      </Grid>
    </CardActions>
  );
};

export default EstateCardFooter;
