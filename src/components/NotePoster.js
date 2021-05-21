import React from 'react'
import './NotePoster.css'
import ColorOption from './ColorOption'
import { useState } from 'react'

const NodePoster = ({COLORS, addNote, changeColor, color}) => {

  const [note, setNote] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault()

    if(!note){
      alert('Empty note')
      return
    }

    addNote(note)
    setNote('')
  }

  return (
    <form className='note-poster' 
      onSubmit={onSubmit}  
    >
      <textarea placeholder='What do you want to note?' 
        onChange={(e) => setNote(e.target.value)} 
        value={note}
        style={{backgroundColor: color}}
        ></textarea>
      <div className='post-function'>
        <div className='colors'>
          {COLORS.map(COLOR => (
            <ColorOption color={COLOR} changeColor={changeColor}/>
          ))}
        </div>
        <input type='submit' value='ADD'/>
      </div>
    </form>
  )
}

export default NodePoster
