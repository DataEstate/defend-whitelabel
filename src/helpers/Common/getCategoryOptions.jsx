// @flow

/**
 * Returns a category options for search bar
 */

type GetCategoryOptions = () => any;

export const getCategoryOptions: GetCategoryOptions = () => {
  return [
    { value: "ACCOMM", label: "Accommodation" },
    { value: "ATTRACTION", label: "Attraction" },
    { value: "TOUR", label: "Tour" },
    { value: "EVENT", label: "Event" },
    { value: "RESTAURANT", label: "Restaurants" }
  ];
};

export default getCategoryOptions;
