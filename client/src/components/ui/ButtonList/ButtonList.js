import React from 'react'
import PropTypes from 'prop-types'

import styles from './ButtonList.module.css'

function buttonList(props) {
  return (
    <img
      className={styles.ButtonList}
      src={props.src}
      onClick={props.click} />
  )
}

buttonList.propTypes = {
  click: PropTypes.func,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default buttonList
