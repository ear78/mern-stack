import React from 'react'

import styles from './InputSubmit.module.css'

function inputSubmit(props) {
  return (
    <div className={styles.InputSubmit} >
      <p>{props.children}</p>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.inputChange}
          />
      <button type="submit" >Submit</button>
    </div>
  )
}

export default inputSubmit
