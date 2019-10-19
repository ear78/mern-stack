import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

function button(props) {
  let btnSize = props.btnSize === 'small' ? styles.Small : ''
  let fullWidth = props.btnWidth === 'fullWidth' ? styles.FullWidth : ''
  let textColor = props.textColor === 'light' ? styles.TextLight : ''
  
  let btnColor
  if(props.btnColor === 'dark'){
    btnColor = styles.BtnDark
  } else if ( props.btnColor === 'light'){
    btnColor = styles.BtnLight
  } else {
    btnColor = ''
  }

  return (
    <button type={props.btnType} value={props.btnValue} onClick={props.click} className={`${styles.Button} ${btnSize} ${fullWidth} ${textColor} ${btnColor}`}>{props.children}</button>
  )
}

button.propTypes = {
  btnColor: PropTypes.string,
  btnWidth: PropTypes.string,
  btnType: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  click: PropTypes.func
}

export default button
