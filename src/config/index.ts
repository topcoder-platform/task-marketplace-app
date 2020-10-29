// REDIRECT_URL -> has to be changes based on the environment
// for localhost login and logout functionality cannot
export const Config = {
  API_URL: 'https://api.topcoder-dev.com/v5',
  APP_URL: 'https://topcoder-dev.com/challenges',
  SSO_URL: 'https://accounts-auth0.topcoder-dev.com',
  REDIRECT_URL: 'http://localhost:3000/challenges',
  COMMUNITY_APP_URL: 'https://community-app.topcoder-dev.com',
  PER_PAGE: 9,
  TASK_DESCRIPTION_LIMIT: 140,
  TOKEN_CHECKER_INTERVAL: 1000 * 60 * 2
}

export const CUT_OFFS = {
  TABLET: 960
}
