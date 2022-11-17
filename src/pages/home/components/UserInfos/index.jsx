import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

function UserInfos({ name, photo }) {
  const isValidName = name !== undefined

  return (
    <section>
      <S.Photo src={photo} />
      <S.Text>Olá{isValidName && `, ${name}`}!</S.Text>
    </section>
  )
}

export default UserInfos

UserInfos.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}
