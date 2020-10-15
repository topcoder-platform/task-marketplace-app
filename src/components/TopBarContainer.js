import React from 'react'

import config from '../config/default.json'

function getUserProfile () {
  return null
}

export default () => {
  const profile = getUserProfile()

  return (
    <div style={{ width: '100%', height: '50px' }}>
      { profile ? <span>Hello { profile.name }</span> : <a href={ config.loginUrl }>Login</a> }
    </div>
  )
}
