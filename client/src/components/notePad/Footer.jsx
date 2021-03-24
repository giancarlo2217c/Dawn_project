import React from "react";
import styles from './notes.module.css'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className = {styles.footer} >
      <p className =  {styles.footerP} >Copyright {year}</p>
    </footer>
  );
}

export default Footer;



