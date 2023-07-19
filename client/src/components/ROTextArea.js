import React from 'react'

const ROTextArea = ( {id, value, onChange, cols, rows, placeholder }) => {
  return (
    <textarea readOnly
      id = {id}
      value = {value}
      onChange = {onChange}
      cols = {cols}
      rows = {rows}
      placeholder = {placeholder}
    ></textarea>
  );
}

export default ROTextArea
