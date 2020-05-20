// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SmartFilter from "./SmartFilter";
import { Container, InputLabel } from "@material-ui/core";
import { getCategoryOptions, getDropdownRenderValue } from "src/helpers/Common";

const useStyles = makeStyles((theme) => ({
  filterSection: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  filterTitle: {
    fontWeight: "bold",
    color: "black",
    fontFamily: theme.typography.h1.fontFamily,
  },
  dropdown: {
    width: 200,
    fontFamily: theme.typography.h1.fontFamily,
  },
}));

type Props = {
  categories?: string,
  onChange: (value: string) => void,
};

export const SearchBar = ({ categories, onChange }: Props) => {
  const classes = useStyles();

  const categoryOptions = getCategoryOptions();

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
        classes={{
          root: classes.dropdown,
          select: classes.dropdown
        }}
        name="estate-filter"
        // because we will use custom placeholder, we dont need any label here
        // label="Any categories"
        placeholder="Any categories"
        type="select"
        options={categoryOptions}
        onChange={(selected, filterName) => {
          handleOnChange(selected);
        }}
        multiple
        renderValue={(values) => getDropdownRenderValue(values, categoryOptions, "Any categories", "Categories")}
      />
    </Container>
  );
};

export default SearchBar;
