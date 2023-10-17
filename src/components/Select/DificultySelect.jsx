// import React from 'react';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import chroma from "chroma-js";

import { colourOptionsLevel } from "../docs/data";
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
    width: 10,
  },
});

const colourStyles = {
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

const DificultySelect = ({ onChange,selectedDificulty }) => {
  const [dificultyChoice, setDificultyChoice] = useState("");
  // const [ index , setIndex ] = useState(0);
  // const checkSelectedDificulty = () => {
  //   if(selectedDificulty === "Easy"){
  //     setIndex(0)
  //   }
  // }
  let index;
  if(selectedDificulty === "Easy"){
    index = 0
  }
  if(selectedDificulty === "Normal"){
    index = 1
  }
  if(selectedDificulty === "Hard"){
    index = 2
  }
  console.log(dificultyChoice);
  console.log('index :>> ', index);
  const handleChange = (choice) => {
    setDificultyChoice(choice);
    onChange(choice);
    // e.preventDefault()
  };

  // useEffect(() => {
  //   checkSelectedDificulty()
  // }, [checkSelectedDificulty])
  return (
    <Select
      defaultValue={colourOptionsLevel[index]}
      options={colourOptionsLevel}
      styles={colourStyles}
      isSearchable={false}
      components={{
        IndicatorSeparator: () => null,
      }}
      onChange={(choice) => handleChange(choice)}
    />
  );
};

export default DificultySelect;

DificultySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};