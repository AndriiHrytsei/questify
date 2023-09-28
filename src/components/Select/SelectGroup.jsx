// import React from "react";
import chroma from "chroma-js";

import { colourOptions } from "../docs/data";
import Select from "react-select";

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10
  }
});

const colourStyles = {
  control: (styles, { selectProps }) => {
    const selectedColor = selectProps.value.color;
    return {
      ...styles,
      transformOrigin: '0 0',
      backgroundColor: selectedColor,
      width: "123px",
      padding: 0,
      paddinfLeft: 10,
      transform: "scale(0.8)",
      fontSize: "20px",
      borderRadius: "50px",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
      fontSize: 11,
      boxShadow: 'none',
      outLine: 'none',
      border: 0,
      fontFamily: "Roboto",
    };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);

    return {
      ...styles,
      ...dot(data.color),
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      // color: isDisabled
      //   ? "#ccc"
      //   : isSelected
      //   ? chroma.contrast(color, "white") > 2
      //     ? "white"
      //     : "black"
      //   : data.color,
      // cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined
      }
    };
  },
  IndicatorSeparator: (styles, _) => ({ ...styles, margin: 0, padding: 0,  }),
  DropdownIndicator: (styles, _) => ({ ...styles, margin: 0, padding: 0, }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color)
  }),
  menu: (styles, _) => ({ ...styles, width: "120px", fontFamily: "Roboto", fontSize: 11, })
};

const DificultySelectGroup = () => (
  <Select
    defaultValue={colourOptions[2]}
    options={colourOptions}
    styles={colourStyles}
    isSearchable={false}
    // isDisabled = {true}
    components={{
      // DropdownIndicator: () => true,
      IndicatorSeparator: () => null
    }}
    // minMenuHeight={30}
    // minMenuHeight = {10}
  />
);

export default DificultySelectGroup