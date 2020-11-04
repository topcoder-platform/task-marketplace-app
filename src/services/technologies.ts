import axios from 'axios'
import { Config } from '../config'

/**
 * Api call to get the list of technologies
 */
export const getTechnologies = async () => {
  const url = `${Config.API_V4_URL}/technologies`
  return axios.get(url)
}
