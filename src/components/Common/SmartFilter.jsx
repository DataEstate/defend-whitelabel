// @flow

import React, { useState, useEffect } from "react";
import {
  MenuItem,
  TextField,
} from "@material-ui/core";
import type { OptionValueType } from "./Types/OptionValueType";
import { getDropdownSelectedValues } from "src/helpers/Common";

type Props = {
  label?: string,
  value?: any,
  name: string,
  placeholder?: string,
  variant?: "filled" | "outlined" | string,
  type: "text" | "number" | "select",
  options?: Array<OptionValueType>,
  multiple?: boolean,
  onChange?: (
    value: string | OptionValueType | Array<OptionValueType>,
    name: string
  ) => void,
  classes?: string,
  renderValue?: Array<any> => { } | string,
    disabled ?: boolean,
    helperText ?: string
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
  disabled = false,
  helperText
}: Props) => {
  const [internalValue, setInternalValue] = useState(value ? (value) : (multiple ? [] : ""));

  useEffect(() => {
    setInternalValue(value ? (value) : (multiple ? [] : ""));
  }, [value]);

  const handleChange = (filterValue, name) => {
    const sendValues = (type !== "select")
      ? filterValue
      : (options ? getDropdownSelectedValues(filterValue, options, multiple) : "");

    if (onChange) {
      onChange(sendValues, name);
    }

    // we will update internal state here
    setInternalValue(filterValue);
  }

  const getComponent = () => {
    return (
      <TextField
        className={classes}
        data-filter-name={name}
        name={name}
        label={label}
        type={type}
        value={internalValue}
        placeholder={placeholder}
        helperText={helperText}
        variant={variant}
        onChange={(e) => handleChange(e.target.value, name)}
        disabled={disabled}
        SelectProps={
          type === "select" ?
            {
              multiple,
              renderValue,
              displayEmpty: Boolean(placeholder)
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
    <div>
      {getComponent()}
    </div>
  );
};

export default SmartFilter;
