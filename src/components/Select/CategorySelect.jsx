// import React from "react";
import chroma from "chroma-js";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

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
    width: 10,
  },
});

const colourStyles = {
  control: (styles, state) => {
    // console.log(state.selectProps);
    const selectedColor = state.selectProps.value.color;
    return {
      ...styles,
      transformOrigin: "0 0",
      backgroundColor: selectedColor,
      width: "123px",
      padding: 0,
      paddinfLeft: 10,
      transform: "scale(0.8)",
      borderRadius: "50px",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
      fontSize: 11,
      boxShadow: "none",
      outLine: "none",
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
  IndicatorSeparator: (styles) => ({ ...styles, margin: 0, padding: 0 }),
  DropdownIndicator: (styles) => ({ ...styles, margin: 0, padding: 0 }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
  }),
  menu: (styles) => ({
    ...styles,
    width: "120px",
    fontFamily: "Roboto",
    fontSize: 11,
  }),
};

const DificultySelectGroup = ({ onChange, selectedCategory,stateCard }) => {
  const [categoryChoice, setCategoryChoice] = useState("");

  console.log(categoryChoice);
  let index;
  switch (selectedCategory) {
    case "Stuff":
      index = 0
      break;
    case "Family":
      index = 1
      break;
    case "Health":
      index = 2
      break;
    case "Learning":
      index = 3
      break;
    case "Leisure":
      index = 4
      break;
    case "Work":
      index = 5
      break;
    default:
      index = 0
      break;
  }
  const handleOnChange = (choice) => {
    setCategoryChoice(choice);
    onChange(choice);
    // e.preventDefault()
  };

  useEffect(() => {
    console.log(categoryChoice);
  }, [categoryChoice]);

  return (
    <Select
      defaultValue={colourOptions[index]}
      options={colourOptions}
      styles={colourStyles}
      isSearchable={false}
      isDisabled = {stateCard}
      components={stateCard === true ? ({DropdownIndicator: () => true,IndicatorSeparator: () => null}) : ({IndicatorSeparator: () => null})}
      onChange={(choice) => handleOnChange(choice)}
    />
  );
};

export default DificultySelectGroup;

DificultySelectGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
};
