import React from 'react'
import styles from './Form.module.css'

function form(props) {
  return (
    <form className={styles.Form} onSubmit={props.submit}>
      {props.children}
    </form>
  )
}

export default form
