import React from 'react'

import styles from './H1.module.css'



function h1(props) {
  let align
  if(props.textAlign === 'center'){
    align = styles.Center
  } else if (props.textAlign === 'right') {
    align = styles.Right
  } else {
    align = ''
  }

  return <h1 className={`${styles.H1} ${align}`}>{props.children}</h1>
}

export default h1
