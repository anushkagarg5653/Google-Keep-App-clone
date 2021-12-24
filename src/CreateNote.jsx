import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title:'',
    content: ''
  });

  const InputEvent = (event) =>{
    const {name, value} = event.target;

    setNote((preData) => {
      return {
        ...preData,
        [name] : value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title:'',
      content: ''
    });
  }
  const expandIt = () => {
    setExpand(true);
  }
  const Normal = () => {
    setExpand(false);
  }

  return <>
    <div className="main_note" onDoubleClick={Normal}>
        <form>
       { expand?
            <input type="text"
             placeholder="Title"
               value={note.title}
               onChange={InputEvent}
               name="title"
             /> : null}
            <textarea rows=""
             column="" 
             placeholder="Write a note..."
             value={note.content}
             onChange={InputEvent}
             name="content"
             onClick = {expandIt}
             
             ></textarea>
             {expand?
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button> : null}
        </form>
    </div>
  </>
};

export default CreateNote;