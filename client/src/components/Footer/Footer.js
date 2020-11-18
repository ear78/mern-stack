import React from 'react'
import styles from './Footer.module.css'

function footer(props) {
  return (
    <footer className={styles.Footer}>
      {props.children}
      <p className={styles.desc}>Design &amp; Build: <span>Elliot Richardson</span></p>
    </footer>
  )
}

export default footer
