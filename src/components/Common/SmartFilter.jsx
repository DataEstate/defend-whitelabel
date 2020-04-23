// @flow

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  TextField,
} from "@material-ui/core";
import type { OptionValueType } from "./Types/OptionValueType";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

type Props = {
  label: string,
  value?: any,
  name: string,
  placeholder?: string,
  variant?: "filled" | "outlined" | string,
  type: "text" | "number" | "select",
  options?: Array<OptionValueType>,
  multiple?: boolean,
  onChange?: (e: {
    value: OptionValueType | string,
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

  const handleChange = (filterValue, name) => {
    let sendValues;

    if (type === "select") {
      if (multiple) {
        // create an array of values if multiple
        sendValues = [];
        for (let i = 0, l = filterValue.length; i < l; i += 1) {
          sendValues.push(options.find(item => item.value === filterValue[i]));
        }
      } else {
        // if not, just pass one object
        sendValues = filterValue;
      }
    } else {
      // for the rest, just pass one object
      sendValues = filterValue;
    }

    // send the object upfront
    onChange({ value: sendValues, name });
    // if uncontrolled, then set local state
    if (!value) {
      setInternalValue(filterValue);
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
        onChange={(e) => handleChange(e.target.value, name)}
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
