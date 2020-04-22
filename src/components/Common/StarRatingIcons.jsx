// @flow

import * as React from "react";
import classnames from "classnames";
import { Star, StarBorder, StarHalf } from "@material-ui/icons";
import { getStarsArrayFromRating } from "src/helpers/Common";

type Props = {
  rating: number | string,
  className?: string,
  total?: number,
};

type GetStars = (starRating: number, total: number) => React.Node;

export const StarRatingIcons = ({ rating, total = -1, className }: Props) => {
  // Sanitize the number
  const ratingNumber = isNaN(rating)
    ? -1
    : typeof rating === "string"
    ? Number(rating)
    : rating;

  // Returns number of stars icon of type.
  const getStars: GetStars = (starRating, totalStars = -1) => {
    const starsArray = getStarsArrayFromRating(starRating, totalStars);

    return starsArray.reduce((curr, star, idx) => {
      const starIcon =
        star === 0 ? (
          <StarBorder key={idx} className={className} />
        ) : star === 0.5 ? (
          <StarHalf key={idx} className={className} />
        ) : (
          <Star key={idx} className={className} />
        );
      return star < 0 ? curr : [...curr, starIcon];
    }, []);
  };

  return (
    ratingNumber !== -1 && (
      <div className={classnames("StarRating")}>
        {getStars(ratingNumber, total)}
      </div>
    )
  );
};

export default StarRatingIcons;
