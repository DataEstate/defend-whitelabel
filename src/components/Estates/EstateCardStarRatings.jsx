// @flow

import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right",
    position: "relative",
    right: 6.61,
    textAlign: "right"
  },
  title: {
    ...theme.typography.h2,
    fontSize: 6,
    marginTop: 9,
    color: "white",
    textTransform: "uppercase",
  },
  starSection: {
    color: "#FABA01",
    marginTop: -8,
    marginBottom: 11,
  },
  starIcon: {
    height: 14,
    width: 14,
  }
}));

type Props = {
  rating: number
};

export const EstateCardStarRatings = ({ rating }: Props) => {
  const classes = useStyles();

  const generateStarsIcon = () => {
    if (rating < 0 || rating > 5) {
      return null;
    } else {
      const remainder = 5 - rating;
      
      const emptyStar = remainder < 1 ? 0 : parseInt(remainder);
      const halfStar = (rating % 1) / 0.5;
      const fullStar = parseInt(rating);

      let starRating = [];
      if (fullStar > 0) {
        for (let index = 0; index < fullStar; index++) {
          starRating.push(<StarIcon className={classes.starIcon} />);
        }
      }
      if (halfStar > 0) {
        for (let index = 0; index < halfStar; index++) {
          starRating.push(<StarHalfIcon className={classes.starIcon} />);
        }
      }
      if (emptyStar > 0) {
        for (let index = 0; index < emptyStar; index++) {
          starRating.push(<StarBorderIcon className={classes.starIcon} />);
        }
      }

      return starRating;
    }
  }
  
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>Star Rating</Typography>
      <Typography variant={"h6"} className={classes.starSection}>{generateStarsIcon()}</Typography>
    </div>
  );
};

export default EstateCardStarRatings;
