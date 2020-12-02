import Axios from 'axios'
import { getAuthUserTokens } from '@topcoder/micro-frontends-navbar-app'

import { Config } from '../config'

/**
 * API call to get the list of groups
 */
export const getGroups = async ({ perPage = 4 }: { perPage: number }) => {
  const authUserTokens = await getAuthUserTokens()
  const token = authUserTokens.tokenV3
  return Axios.get(`${Config.API_URL}/groups?perPage=${perPage}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
