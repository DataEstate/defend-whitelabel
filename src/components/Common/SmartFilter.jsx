// @flow

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

type FilterOption = {
  label: string,
  value: any,
};

type Props = {
  label: string,
  value?: any,
  name: string,
  placeholder?: string,
  variant?: "filled" | "outlined" | string,
  type: "text" | "number" | "select",
  options?: Array<FilterOption>,
  multiple?: boolean,
  onChange?: (e: {
    value: FilterOption | string,
    name: string
  }) => void,
  classes?: string,
  renderValue?: (e: any) => string,
  disabled?: boolean
};

export const SmartFilter = ({
  label,
  value,
  name,
  placeholder,
  variant,
  type,
  options,
  multiple = false,
  onChange,
  classes,
  renderValue,
  disabled = false
}: Props) => {
  const [internalValue, setInternalValue] = useState(multiple ? [] : "");
  const styleClass = classes ? classes : useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
    if (!value) {
      setInternalValue(event.target.value);
    }
  }

  const getComponent = () => {
    return (
      <TextField
        classes={styleClass}
        data-filter-name={name}
        name={name}
        label={label}
        type={type}
        value={value ? value : internalValue}
        placeholder={placeholder}
        // for select type, placeholder are not exist, so we use helperText instead
        helperText={type === "select" && placeholder}
        variant={variant}
        onChange={handleChange}
        disabled={disabled}
        SelectProps={
          type === "select" ?
            {
              multiple: multiple,
              renderValue: renderValue
            }
            : null
        }
        select={type === "select"}
      >
        {type === "select" && options &&
          options.map((optionItem) => (
            <MenuItem key={optionItem.value} value={optionItem.value}>
              {optionItem.label}
            </MenuItem>
          ))
        }
      </TextField>
    );
  }

  return (
    <div className={styleClass.root}>
      {getComponent()}
    </div>
  );
};

export default SmartFilter;
