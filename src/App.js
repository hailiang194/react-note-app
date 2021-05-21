import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import SearchBar from  './components/SearchBar'
import NodePoster from './components/NotePoster'
import NoteShower from './components/NoteShower' 
import Footer from './components/Footer'

const NOTE_COLORS = [
  '#f06292',
  '#ba68c8',
  '#ffd54f',
  '#4fc3f7',
  '#aed581'
]

function App() {

  const [notes, setNotes] = useState([])

  const [color, setColor] = useState(NOTE_COLORS[0])
  
  const [query, setQuery] = useState('')

  const changeColor = (newColor) => {
    setColor(newColor)
  }

  const addNote = (note) => {
    const id = notes.length
    const newNote = {id, note, color}

    setNotes([...notes, newNote])
  }

  const changeQuery = (newQuery) => {
    setQuery(newQuery)
  }

  return (
    <div>
      <div className='container'>
        <Header/>
        <SearchBar changeQuery={changeQuery}/>
        <NodePoster COLORS={NOTE_COLORS} addNote={addNote} changeColor={changeColor} color={color} />
        <NoteShower notes={notes} query={query}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
