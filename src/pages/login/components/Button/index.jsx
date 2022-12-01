import React from 'react'
import PropTypes from 'prop-types'

import CustomButton from './styles'

function Button({ type, text, redirectUrl, disabled }) {
  return (
    <CustomButton
      type={type}
      to={disabled ? '#' : redirectUrl}
      disabled={disabled}
    >
      {text}
    </CustomButton>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  redirectUrl: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Button
