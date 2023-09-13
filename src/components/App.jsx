import React, { useState } from "react";
import CreateApp from "./CreateApp";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


export default function App() {

  
const [notes,setNotes]=useState([]);


  function addNote(newNote){
    setNotes(prevNote=>{
      return [...prevNote,newNote]
    })

  }

  function deleteNote(id){
    setNotes(prevNote=>{
      return prevNote.filter((noteItem,index)=>{
        return index!==id
      })
    })
  }

  return (<div>
    <Header/>
    <CreateApp
      onAdd={addNote}
    />
    {
      notes.map((noteItem,index)=>{
        return <Note
        id={index}
        key={index}
        onDelete={deleteNote}
          title={noteItem.title}
          content={noteItem.content}
        />
      })
    }
    
    <Footer/>
  </div>)
  
  
}