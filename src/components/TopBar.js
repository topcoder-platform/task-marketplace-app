import React from 'react'
import { getLoginUrl, getLogoutUrl } from '../api/auth'

export default ({ profile }) => {
  return (
    <div style={{ width: '100%', height: '50px' }}>
      { profile ?
        <span>Hello <span style={{ fontWeight: 'bold' }}>{ profile.handle }</span> <a href={ getLogoutUrl() }>Logout</a></span> :
        <a href={ getLoginUrl() }>Login</a> }
    </div>
  )
}
