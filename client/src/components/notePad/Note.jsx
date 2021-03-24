import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from './notes.module.css'


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={styles.note}>
      <h1 className = {styles.noteH1} >{props.title}</h1>
      <p>{props.content}</p>
      <button className = {styles.noteButton} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

