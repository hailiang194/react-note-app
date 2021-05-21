import React from 'react'
import Note from './Note'

const NoteShower = ({notes, query}) => {
  return (
    <div>
      {notes.filter(
        note => note.note.toLowerCase().includes(query.toLowerCase())
        ).map(
          (note, index) => (<Note note={note}/>)
        )
      }
    </div>
  )
}

export default NoteShower
