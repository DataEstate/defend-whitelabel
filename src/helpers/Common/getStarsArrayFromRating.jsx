// @flow

/**
 * Returns an array of star ratings based on a star rating, and a total
 * @param starRating number of full and half stars (i.e. 4.5)
 * @param total total number of stars available. Use -1 to not show total.
 */

type GetStarsArrayFromRating = (
  starRating: number,
  total: number
) => Array<number>;

export const getStarsArrayFromRating: GetStarsArrayFromRating = (
  starRating,
  totalStars = -1
) => {
  const fullStarCount = Math.floor(starRating);
  const emptyStarCount =
    totalStars - starRating >= 0.5 ? Math.floor(totalStars - starRating) : 0;

  return [
    ...Array.from(Array(fullStarCount), (x) => 1), //All the full stars
    ...(starRating % 1 === 0.5 ? [0.5] : []), // Half stars of 0.5 or empty
    ...Array.from(Array(emptyStarCount), (x) => 0),
  ];
};

export default getStarsArrayFromRating;
