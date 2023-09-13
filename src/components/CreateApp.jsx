import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

export default function CreateApp(props){
  const[note,setNote]=useState({
      title:"",
      content:""
  })
  const [isExpanded,setExpanded]=useState(false)
  function handleChange(event){
      const {name,value}=event.target;
      setNote(prevValue=>{
          return{
              ...prevValue,
              [name]:value
          }
      })
  }
  function submitNote(event){
      
      props.onAdd(note);
      setNote({
          title:"",
          content:""
      })
      event.preventDefault();
  }

  function expand(){
    setExpanded(true)
  }
  return(
      
      <div>
          <form className="create-note">
          {isExpanded?<input
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  value={note.title}
              />: null}
              
              <textarea
              onClick={expand}
                  name="content"
                  placeholder="Take a note..."
                  rows={isExpanded? 3:1}
                  onChange={handleChange}
                  value={note.content}
              />
              <Zoom in={isExpanded}
              >
              <Fab onClick={submitNote}>
                  <AddIcon/>
              </Fab>
              </Zoom>
              
          </form>
      </div>
  )
}