import React from 'react';
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <>
      <h2 className={styles.red}>This is Header Component with Module SCSS </h2>
      <h3 className="text-danger">Bootstrap Class Text Danger</h3>
      <button className="btn btn-primary rounded-pill px-3" type="button">Primary Button Bootstrap</button>
    </>
  )
}

export default Header