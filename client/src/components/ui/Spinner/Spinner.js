import React from 'react'
import styles from './Spinner.module.css'

function spinner(props) {
  return (
    <div className={styles.SpinnerBg}>
      <div className={styles.Circle}></div>
    </div>
  )
}

export default spinner
