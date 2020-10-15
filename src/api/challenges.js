import axios from 'axios'
import config from '../config/default.json'

const client = axios.create({
  baseURL: config.challengesUrl
})

export async function getAllTask () {
  const r = await client.get('?page=1&perPage=20&types=Task&isLightweight=false&isTask=false&taskIsAssigned=false', {
    accept: 'application/json',
    'Content-Type': 'application/json'
  })

  console.log(r.data)

  return r.data
}
