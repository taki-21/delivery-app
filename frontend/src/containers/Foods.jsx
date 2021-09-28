import React, { Fragment } from 'react'

export const Foods = props => {
  const { match } = props
  return (
    <Fragment>
      フード一覧
      <p>restaurantIdは{match.params.restaurantsId}です</p>
    </Fragment>
  )
}
