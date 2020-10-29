import axios from 'axios'
import { getFreshToken } from '@topcoder-platform/tc-auth-lib'
import { Config } from '../config'
import { FilterParams } from '../store/models/filter'

/**
 * Api call to get the list of task with pagination and filter paramss
 * @param page
 * @param params
 */
export const getTasks = async (page: number, params?: FilterParams) => {
  let token = ''

  if (params && params.groups.length > 0) {
    // if tags are available and if the token is not available then we throw the error
    token = await getFreshToken()
  } else {
    try {
      // Try catch block is needed to throw the error and continue fetching the
      // challenges even though the token cookie is not available if filter by tags
      // is not available
      token = await getFreshToken()
    } catch (e) {
      console.log(e, 'failed to get fresh token')
    }
  }
  // Added types, taskIsAssigned and isLightweight by default
  // to get only the tasks
  let url = `${Config.API_URL}/challenges?types=Task&taskIsAssigned=false&isLightweight=false&page=${page}&perPage=${Config.PER_PAGE}`
  if (params) {
    if (params.groups) {
      url += params.groups.map((groupId) => `groups[]=${groupId}`).join('&')
    }
    if (params.tags) {
      url = params.tags.reduce((acc, item) => {
        return `${acc}&tags[]=${item}`
      }, url)
    }
  }
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
