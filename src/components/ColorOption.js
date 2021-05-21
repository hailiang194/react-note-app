import React from 'react'
import './ColorOption.css'

const ColorOption = ({color, changeColor}) => {

  const onClick = () => {
    changeColor(color)
  }

  return (
    <div className='color-option'>
      <span style={{background: color}} onClick={onClick}></span>
    </div>
  )
}

export default ColorOption
