import React from 'react'
import styles from './BrandLogo.module.css'

import earLogo from '../../../assets/images/ear-logo.svg'

function brandLogo(props) {
  return (
    <div className={styles.BrandLogo}>
      <img src={earLogo} alt="logo" />
      <p>MERN</p>
    </div>
  )
}

export default brandLogo
