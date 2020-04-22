// @flow

import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { StarRatingIcons } from "src/components/Common";

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right",
    position: "relative",
    right: 6.61,
    textAlign: "right",
  },
  title: {
    ...theme.typography.h2,
    fontSize: theme.typography.pxToRem(8),
    color: "white",
    textTransform: "uppercase",
  },
  starSection: {
    color: "#FABA01",
    height: "1rem",
    width: "1rem",
  },
}));

type Props = {
  rating: number,
};

export const EstateCardStarRatings = ({ rating }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        Star Rating
      </Typography>
      <StarRatingIcons className={classes.starSection} rating={rating} />
    </div>
  );
};

export default EstateCardStarRatings;
