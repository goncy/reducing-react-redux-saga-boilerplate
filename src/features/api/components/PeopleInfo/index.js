import React from 'react'

import common from '../../../common'

const PeopleInfo = ({response}) => (
  <div>{JSON.stringify(response)}</div>
)

export default common.hocs.asyncFromAction(PeopleInfo)
