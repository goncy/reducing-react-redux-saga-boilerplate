import React from 'react'

import common from '../../../common'

const ShowJoke = ({response}) => (
  <div>{JSON.stringify(response)}</div>
)

export default common.hocs.asyncFromAction(ShowJoke)
