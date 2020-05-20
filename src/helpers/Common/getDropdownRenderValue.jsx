// @flow

/**
 * Returns dropdown renderValue for multiple selection
 * @param values selected values from select / dropdown
 * @param options options array consists of { value, label }
 * @param defaultLabel default label for unknown
 * @param groupLabel default label for multiple selection
 */

type GetDropdownRenderValue = (
  values: Array<any>,
  options: Array<any>,
  defaultLabel?: string,
  groupLabel?: string,
) => string;

export const getDropdownRenderValue: GetDropdownRenderValue = (
  values = [],
  options = [],
  defaultLabel = "",
  groupLabel = "Options",
) => {
  if (Array.isArray(values)) {
    if (values.length < 1 || (values.length === 1 && values[0] === "")) {
      return defaultLabel;
    }
    if (values.length === 1 && (values[0] !== "" || values[0] !== undefined)) {
      const currentSelected = options.find(x => x.value === values[0]);
      return currentSelected ? currentSelected.label : defaultLabel;
    }
    if (values.length > 1) {
      return `${groupLabel} - ${values.length}`;
    }
  }
  return defaultLabel;
};

export default getDropdownRenderValue;
