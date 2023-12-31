/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// import React from 'react';
import { useState } from "react";
import PropTypes from "prop-types";
import chroma from "chroma-js";

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
    width: 10,
  },
});

export const dificultyStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "122px",
    minHeight: "25px",
    height: "25px",
    border: 0,
    boxShadow: "none",
    outLine: "none",
    fontSize: 14,
    fontFamily: "Roboto",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  dropdownIndicator: (styles) => ({
    ...styles,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 0,
    paddingRight: 16,
    fontFamily: "Roboto",
  }),
  clearIndicator: (styles) => ({
    ...styles,
    paddingTop: 7,
    paddingBottom: 7,
    fontFamily: "Roboto",
  }),
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  menu: (styles) => ({
    ...styles,
    width: "120px",
    fontFamily: "Roboto",
    fontSize: 14,
  }),
};

const DificultySelect = ({ onDifficultyChange, selectedDificulty, stateCard }) => {
  const [_, setDificultyChoice] = useState("");
  
  let index;
  if (selectedDificulty === "Easy") {
    index = 0;
  }
  if (selectedDificulty === "Normal") {
    index = 1;
  }
  if (selectedDificulty === "Hard") {
    index = 2;
  }
  
  const handleChange = (choice) => {
    setDificultyChoice(choice);
    onDifficultyChange(choice);
  };

  // return (
  //   <Select
  //     defaultValue={difcultyOptions[index]}
  //     options={difcultyOptions}
  //     styles={colourStyles}
  //     isSearchable={false}
  //     isDisabled={stateCard}
  //     components={
  //       stateCard === true
  //         ? { DropdownIndicator: () => true, IndicatorSeparator: () => null }
  //         : { IndicatorSeparator: () => null }
  //     }
  //     onChange={(choice) => handleChange(choice)}
  //   />
  // );
};

export default DificultySelect;

DificultySelect.propTypes = {
  onDifficultyChange: PropTypes.func.isRequired,
  selectedDificulty: PropTypes.string,
  stateCard: PropTypes.bool,
};

