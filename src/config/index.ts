// TopCoder hostname. "topcoder-dev" for the dev environment, "topcoder" for production
const TC_HOST = process.env.REACT_APP_TC_HOST

export const Config = {
  API_URL: `https://api.${TC_HOST}.com/v5`,
  APP_URL: `https://${TC_HOST}.com/challenges`,
  SSO_URL: `https://accounts-auth0.${TC_HOST}.com`,
  COMMUNITY_APP_URL: `https://community-app.${TC_HOST}.com`,
  PER_PAGE: 9,
  GROUPS_COUNT: 5,
  TASK_DESCRIPTION_LIMIT: 140,
  TOKEN_CHECKER_INTERVAL: 1000 * 60 * 2
}

export const CUT_OFFS = {
  TABLET: 960
}
