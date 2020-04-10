// @flow

import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    float: "right",
    position: "relative",
    right: 6.61,
    textAlign: "right"
  },

  title: {
    fontFamily: "Poppins",
    fontSize: 6,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  starSection: {
    color: "#ffffff", // remove later
  }
});

type Props = {
  rating: number
};

export const EstateCardStarRatings = ({ rating }: Props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.title}>Star Rating</div>
      <div className={classes.starSection}>*****</div>
    </div>
  );
};

export default EstateCardStarRatings;
