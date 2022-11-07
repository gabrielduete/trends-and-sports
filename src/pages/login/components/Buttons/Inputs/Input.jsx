import React from 'react'

import PropTypes from 'prop-types'
import * as S from './styles'

function Input({ placeholder, type, onChange }) {
  return (
    <S.Input type={type} onChange={() => onChange}>
      {' '}
      {placeholder}{' '}
    </S.Input>
  )
}

export default Input

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
