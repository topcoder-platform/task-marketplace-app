# Topcode - Task Marketplace Micro Frontend

This is a [single-spa](https://single-spa.js.org/) example React microapp.

> NOTE. This application have been configured to be run as child app of a single-spa application. So while this app can be deployed and run independently, we would need some frame [single-spa](https://single-spa.js.org/) which would load it. While technically we can achieve running this app as standalone app it's strongly not recommended by the author of the `single-spa` approch, see this [GitHub Issue](https://github.com/single-spa/single-spa/issues/640) for details.

## Requirements

- node - v10.22.1
- npm - v6.14.6

## NPM Commands

| Command               | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `npm start`           | Run server which serves production ready build from `dist` folder |
| `npm run dev`         | Run app in the development mode                                   |
| `npm run dev-https`   | Run app in the development mode using HTTPS protocol              |
| `npm run build`       | Build app for production and puts files to the `dist` folder      |
| `npm run analyze`     | Analyze dependencies sizes and opens report in the browser        |
| `npm run lint`        | Check code for lint errors                                        |
| `npm run lint:fix`    | Check code for lint errors and fix fixable errors                 |
| `npm run format`      | Format code using prettier                                        |
| `npm run test`        | Run unit tests                                                    |
| `npm run watch-tests` | Watch for file changes and run unit tests on changes              |
| `npm run coverage`    | Generate test code coverage report                                |

## Local Deployment

Inside the project folder run:

- `npm i` - install dependencies
- `npm run dev` - run app in development mode
- As this app can be loaded only inside a frame single-spa, you have to run a `micro-frontends-frame` frame app and configure it to use the URL `http://localhost:8500/topcoder-micro-frontends-task-marketplace-app.js`.

## Deployment to Production

- `npm i` - install dependencies
- `npm build` - build code to `dist/` folder
- Now you can host `dist/` folder using any static server. For example, you may run a simple `Express` server by running `npm start`.

## Notes

1. The app uses SPA `@topcoder/micro-frontends-navbar-app` for authentication. The app will not load without the navbar app ready
2. All the configs are available in `config/index.ts`
3. For including any external packages in the **typescript** + **webpack** project, type definitions of the imports (atleast those which have been used) from the external packages are needed. If already available, install these typedefs in one of `node_modules` or `@types` folder
