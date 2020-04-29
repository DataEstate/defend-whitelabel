// @flow

/**
 * Returns a complete value of a selected drop-down, compared with its options data array
 * @param rawValues selected values from select / dropdown
 * @param options options array consists of { value, label }
 * @param multiple is this a multiple selection or not
 */
import type { OptionValueType } from "src/components/Common/Types/OptionValueType";

type GetDropdownSelectedValues = (
  rawValues: string | Array<string>,
  options: Array<OptionValueType>,
  multiple: boolean
) => any; // tried with string | OptionValueType | Array<OptionValueType> but still stuck with undefined type return

export const getDropdownSelectedValues: GetDropdownSelectedValues = (
  rawValues, options, multiple = false
) => {
  if (rawValues && options) {
    if (multiple && rawValues.length > 0) {
      // create an array of values if multiple
      let composed = Array<OptionValueType>(rawValues.length);
      if (options) {
        for (let i = 0, l = rawValues.length; i < l; i += 1) {
          composed[i] = options.find(item => item.value === rawValues[i]);
        }
      }
      return composed;
    }

    return (options.length > 0) ? options.find(item => item.value === rawValues) : "";
  }
  return "";
};

export default getDropdownSelectedValues;
