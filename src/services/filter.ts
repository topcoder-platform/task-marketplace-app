import Axios from 'axios'
import { getFreshToken } from '@topcoder-platform/tc-auth-lib'
import { Config } from '../config'

/**
 * API call to get the list of groups
 */
export const getGroups = async ({
  perPage = 4
}: {
  perPage: number;
}) => {
  const token = await getFreshToken()
  return Axios.get(`${Config.API_URL}/groups?perPage=${perPage}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
