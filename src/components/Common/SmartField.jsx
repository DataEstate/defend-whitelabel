// @flow

import * as React from "react";
import { TextField } from "@material-ui/core";
import type { FieldType } from "./types/FieldType";

type Props = {
  fieldType: FieldType,
  options?: Array<React.Node>
};

export const SmartField = ({ fieldType, options = [], ...props }: Props) => {
  switch (fieldType) {
    case "select":
      return (
        <TextField {...props} select={true}>
          {options}
        </TextField>
      );
    default:
      return <TextField {...props} />;
  }
};

export default SmartField;
