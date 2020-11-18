import React from 'react'
import styles from './CloseBtn.module.css'

function closeBtn(props) {
  return (
    <span className={styles.Close} onClick={props.click}>&times;</span>
  )
}

export default closeBtn
