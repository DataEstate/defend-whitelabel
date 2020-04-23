// @flow

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
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
  value: any,
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
  const styleClass = classes ? classes : useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
  }

  const getComponent = () => {
    switch (type) {
      case "text":
      case "number":
        return (
          <TextField
            classes={styleClass}
            data-filter-name={name}
            name={name}
            label={label}
            type={type}
            value={value}
            placeholder={placeholder}
            variant={variant}
            onChange={handleChange}
            disabled={disabled}
          />
        );
      case "select":
        return (
          <FormControl className={styleClass.root}>
            <InputLabel id={`label-${name}`}>{label}</InputLabel>
            <Select
              labelId={`label-${name}`}
              classes={styleClass}
              id={`select-${name}`}
              multiple={multiple}
              value={value}
              onChange={handleChange}
              input={<Input />}
              renderValue={renderValue}
            >
              {placeholder &&
                <MenuItem value="none" disabled>
                  {placeholder}
                </MenuItem>}
              {options.map((optionItem) => (
                <MenuItem key={optionItem.value} value={optionItem.value}>
                  {optionItem.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      default:
        break;
    }
  }

  return (
    <div className={styleClass.root}>
      {getComponent()}
    </div>
  );
};

export default SmartFilter;
