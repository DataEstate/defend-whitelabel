// @flow

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SmartFilter from "./SmartFilter";
import { Container, InputLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filterSection: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  filterTitle: {
    fontWeight: "bold",
    color: "black"
  },
  dropdown: {
    width: 200
  },
}));

type Props = {
  categories?: string,
  onChange: (value: string) => void,
};

export const SearchBar = ({ categories, onChange }: Props) => {
  const classes = useStyles();

  const options = [
    { value: "ACCOMM", label: "Accommodation" },
    { value: "ATTRACTION", label: "Attraction" },
    { value: "TOUR", label: "Tour" },
    { value: "EVENT", label: "Event" },
    { value: "RESTAURANT", label: "Restaurants" }
  ];

  const filterValue = (categories) ? categories.split(",") : null;

  const handleOnChange = (values) => {
    const returnedValue = Array.isArray(values) ? values.map(filter => filter.value).toString() : "";
    onChange(returnedValue);
  }

  return (
    <Container maxWidth={"xl"} classes={{ root: classes.filterSection }}>
      <InputLabel classes={{ root: classes.filterTitle }}>
        Categories
      </InputLabel>
      <SmartFilter
        value={filterValue}
        classes={classes.dropdown}
        name="estate-filter"
        // because we will use custom placeholder, we dont need any label here
        // label="Any categories"
        placeholder="Any categories"
        type="select"
        options={options}
        onChange={(selected, filterName) => {
          handleOnChange(selected);
        }}
        multiple
        renderValue={(values) => {
          if (Array.isArray(values)) {
            if (values.length < 1 || (values.length === 1 && values[0] === "")) {
              return "Any categories";
            }
            if (values.length === 1 && (values[0] !== "" || values[0] !== undefined)) {
              const currentSelected = options.find(x => x.value === values[0]);
              return currentSelected ? currentSelected.label : "Unknown";
            }
            if (values.length > 1) {
              return `Categories - ${values.length}`;
            }
          }
          return "Unknown";
        }}
      />
    </Container>
  );
};

export default SearchBar;
