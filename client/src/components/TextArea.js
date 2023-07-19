import React from 'react'

const TextArea = ( {id, value, onChange, cols, rows, placeholder }) => {
  return (
    <textarea
      id = {id}
      value = {value}
      onChange = {onChange}
      cols = {cols}
      rows = {rows}
      placeholder = {placeholder}
    ></textarea>
  );
}

export default TextArea
