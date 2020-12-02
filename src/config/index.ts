// TopCoder hostname. "topcoder-dev" for the dev environment, "topcoder" for production

const env = process.env.NODE_ENV || 'development'
const TC_HOST = env === 'production' ? 'topcoder' : 'topcoder-dev'

export const Config = {
  API_URL: `https://api.${TC_HOST}.com/v5`,
  APP_URL: `https://${TC_HOST}.com/challenges`,
  API_V4_URL: `https://api.${TC_HOST}.com/v4`,
  PER_PAGE: 9,
  GROUPS_COUNT: 5,
  TASK_DESCRIPTION_LIMIT: 140
}

export const CUT_OFFS = {
  TABLET: 960
}
