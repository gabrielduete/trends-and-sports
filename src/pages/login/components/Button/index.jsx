import React from 'react'
import PropTypes from 'prop-types'

import CustomButton from './styles'

function Button({ type, text, onClick }) {
  return (
    <CustomButton type={type} onClick={() => onClick}>
      {text}
    </CustomButton>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
