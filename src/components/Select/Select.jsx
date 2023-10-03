// import React from 'react';
import chroma from 'chroma-js';

import { colourOptionsLevel } from '../docs/data';
import Select from 'react-select';

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', width: '122px', minHeight: '25px', height: '25px', border: 0, boxShadow: 'none', outLine: 'none', fontSize: 14, fontFamily: "Roboto", }),
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
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
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
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  menu: (styles, _) => ({ ...styles, width: "120px", fontFamily: "Roboto", fontSize: 14, })
};

const DificultySelect = () => (
  <Select
    defaultValue={colourOptionsLevel[2]}
    options={colourOptionsLevel}
    styles={colourStyles}
    components={{
      IndicatorSeparator: () => null
    }}
  />
);

export default DificultySelect