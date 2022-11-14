import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

function UserInfos({ name = '', photo }) {
  return (
    <section>
      <S.Photo src={photo} />
      <S.Text>Olá, {name}!</S.Text>
    </section>
  )
}

export default UserInfos

UserInfos.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}
