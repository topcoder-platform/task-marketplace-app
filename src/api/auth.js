import { configureConnector, getFreshToken, decodeToken } from '@topcoder-platform/tc-auth-lib'
import config from '../config/default.json'

configureConnector({
  connectorUrl: config.accountAppUrl,
  frameId: 'tc-accounts-iframe'
})

export async function getUserProfile () {
  try {
    const token = await getFreshToken()
    return { token, profile: decodeToken(token) }
  } catch (error) {
    console.log(error)
  }
}

export function getLoginUrl () {
  return config.accountAppUrl + `/?retUrl=${window.location.origin}`
}

export function getLogoutUrl () {
  return config.accountAppUrl + `/?retUrl=${window.location.origin}&logout=true`
}