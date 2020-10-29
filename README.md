# Topcode - Task Marketplace

## Local Deployment

```
npm i
npm start
```

## Production Build and Installation
`
npm i
npm run build
`
This will generate the build folder with the assets in it

## Notes

1. The app uses topcoder SSO to authenticate the user
2. In local, since `localhost:3000/challenges` is added as the redirect URL, the login and logout functionality wont work properly
3. For this case, please go to `http://www.topcoder-dev.com/challenges` and sign in with your credentials
4. Open the Dev tools available in any modern browser and look for v3jwt cookie set for *.topcoder-dev.com domain. JWT token is stored in this cookie.
5.  Enable mock mode for tc-auth-lib:

```javascript
configureConnector({
  connectorUrl: 'https://accounts-auth0.topcoder-dev.com',
  frameId: 'tc-accounts-iframe',
  // Mock mode configuration
  mockMode: true,
  mockToken: // v3jwt cookie value
})
```
6. Now the local host will fetch the challenges from dev backend server of topcode
7. Used `react-loader-spinner`[MIT licensed] for loader
8. All the configs are available in `config/index.ts`


## About coding standard
The code base uses `standard.js` configuration for linting

```bash
  npm run lint:fix
```

will fix the fixable linting errors