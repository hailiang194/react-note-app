import React from 'react'
import './Note.css'

const Note = ({note}) => {
  return (
    <div className='note-grid'>
      <div className='note-element'
        style={{backgroundColor: note.color}}
      >
        {note.note}
      </div>
    </div>
  )
}

export default Note
