import { configureConnector, getFreshToken, decodeToken } from '@topcoder-platform/tc-auth-lib'

const ACCOUNT_APP_URL = 'https://accounts-auth0.topcoder-dev.com'

configureConnector({
  connectorUrl: ACCOUNT_APP_URL,
  frameId: 'tc-accounts-iframe'
})

export async function getUserProfile () {
  try {
    const token = await getFreshToken()
    return decodeToken(token)
  } catch (error) {
    console.log(error)
  }
}

export function getLoginUrl () {
  return ACCOUNT_APP_URL + `/?retUrl=${window.location.origin}`
}

export function getLogoutUrl () {
  return ACCOUNT_APP_URL + `/?retUrl=${window.location.origin}&logout=true`
}