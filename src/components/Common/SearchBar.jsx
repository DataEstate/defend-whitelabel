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
  onChange: (value: string) => void,
};

export const SearchBar = ({ onChange }: Props) => {
  const classes = useStyles();
  const [selectedValues, setSelectedValues] = useState([]);

  const options = [
    { value: "ACCOMM", label: "Accommodation" },
    { value: "ATTRACTION", label: "Attraction" },
    { value: "TOUR", label: "Tour" },
    { value: "EVENT", label: "Event" },
    { value: "RESTAURANT", label: "Restaurants" }
  ];

  const handleOnChange = (values) => {
    setSelectedValues(values);
    onChange(values.map(filter => filter.value).toString());
  }

  return (
    <Container maxWidth={"xl"} classes={{ root: classes.filterSection }}>
      <InputLabel classes={{ root: classes.filterTitle }}>
        Categories
      </InputLabel>
      <SmartFilter
        classes={classes.dropdown}
        name="estate-filter"
        // because we will use custom placeholder, we dont need any label here
        // label="Any categories"
        placeholder="Any Categories"
        type="select"
        options={options}
        onChange={(selected, filterName) => { handleOnChange(selected) }}
        multiple
        renderValue={(value) => {
          if (selectedValues.length < 1 || (selectedValues.length === 1 && value[0] === "")) {
            return "Any categories";
          }
          if (selectedValues.length === 1 && (value[0] !== "" || value[0] !== undefined)) {
            return options.find(x => x.value === value[0]).label;
          }
          if (selectedValues.length > 1) {
            return `Categories - ${selectedValues.length}`;
          }
        }}
      />
    </Container>
  );
};

export default SearchBar;
