import React, { useEffect, useState } from 'react'

import { getUserProfile, getLoginUrl, getLogoutUrl } from '../api/auth'

export default () => {
  const [profile, setProfile] = useState()

  useEffect(() => {
    getUserProfile().then((data) => setProfile(data))
  }, [])

  console.log('profile', profile)
  return (
    <div style={{ width: '100%', height: '50px' }}>
      { profile ?
        <span>Hello <span style={{ fontWeight: 'bold' }}>{ profile.user.handle }</span> <a href={ getLogoutUrl() }>Logout</a></span> :
        <a href={ getLoginUrl() }>Login</a> }
    </div>
  )
}
