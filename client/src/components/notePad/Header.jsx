import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import styles from './notes.module.css'

function Header() {
  return (
    <header className = {styles.header}>
      <h1 className = {styles.headerH1} > 
        Keeper
        <HighlightIcon />
      </h1>
    </header>
  );
}

export default Header;

