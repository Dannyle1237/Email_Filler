import React from 'react'

const InputBox = ( {id, value, onChange, placeholder}) => {
  return (
      <input 
        id={id} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}>
      </input>
  )
}

export default InputBox
