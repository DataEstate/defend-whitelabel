// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SmartFilter from "./SmartFilter";
import { Container, InputLabel } from "@material-ui/core";
import { getCategoryOptions } from "src/helpers/Common";

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

type RenderValue = (values: Array<any>, defaultLabel?: string, groupLabel?: string) => string;

export const SearchBar = ({ categories, onChange }: Props) => {
  const classes = useStyles();

  const categoryOptions = getCategoryOptions();

  const filterValue = (categories) ? categories.split(",") : null;

  const handleOnChange = (values) => {
    const returnedValue = Array.isArray(values) ? values.map(filter => filter.value).toString() : "";
    onChange(returnedValue);
  }

  const renderValue: RenderValue = (values = [], defaultLabel = "", groupLabel = "Options") => {
    if (Array.isArray(values)) {
      if (values.length < 1 || (values.length === 1 && values[0] === "")) {
        return "Any categories";
      }
      if (values.length === 1 && (values[0] !== "" || values[0] !== undefined)) {
        const currentSelected = categoryOptions.find(x => x.value === values[0]);
        return currentSelected ? currentSelected.label : defaultLabel;
      }
      if (values.length > 1) {
        return `${groupLabel} - ${values.length}`;
      }
    }
    return defaultLabel;
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
        options={categoryOptions}
        onChange={(selected, filterName) => {
          handleOnChange(selected);
        }}
        multiple
        renderValue={(values) => renderValue(values, "Unknown", "Categories")}
      />
    </Container>
  );
};

export default SearchBar;
