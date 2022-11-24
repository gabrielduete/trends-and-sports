import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

function UserInfos({ name }) {
  const isValidName = name !== undefined

  return (
    <section>
      <S.Text>Olá{isValidName && `, ${name}`}!</S.Text>
    </section>
  )
}

export default UserInfos

UserInfos.propTypes = {
  name: PropTypes.string.isRequired,
}
