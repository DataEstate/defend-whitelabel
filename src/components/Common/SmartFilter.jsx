// @flow

import React, { useState } from "react";
import {
  MenuItem,
  TextField,
} from "@material-ui/core";
import type { OptionValueType } from "./Types/OptionValueType";

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
  renderValue?: () => {} | string,
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
  disabled = false,
}: Props) => {
  const [internalValue, setInternalValue] = useState(multiple ? [] : "");

  const handleChange = (filterValue, name) => {
    let sendValues = filterValue;

    if (type === "select") {
      if (multiple) {
        // create an array of values if multiple
        sendValues = Array<OptionValueType>(filterValue.length);
        if (options) {
          for (let i = 0, l = filterValue.length; i < l; i += 1) {
            sendValues[i] = options.find(item => item.value === filterValue[i]);
          }
        }
      }
    }

    if (onChange) {
      onChange(sendValues, name);
    }
    // if uncontrolled, then set local state
    if (!value) {
      setInternalValue(filterValue);
    }
  }

  const getComponent = () => {
    return (
      <TextField
        className={classes}
        data-filter-name={name}
        name={name}
        label={label}
        type={type}
        value={value ? value : internalValue}
        placeholder={placeholder}
        // for select type, placeholder are not exist, so we use helperText instead
        // helperText={type === "select" && placeholder}
        variant={variant}
        onChange={(e) => handleChange(e.target.value, name)}
        disabled={disabled}
        SelectProps={
          type === "select" ?
            {
              multiple: multiple,
              renderValue: renderValue,
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
