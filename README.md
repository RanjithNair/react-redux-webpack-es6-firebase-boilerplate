React-Redux Boilerplate with Firebase
=====================

React + Redux + React Router + Firebase + Webpack + Node.js

# Table of Contents
1. [Tech Stack](#tech-stack)
2. [Features](#features)
3. [Prerequisite](#prerequisite)
4. [Dev Usage](#dev-usage)
5. [Firebase Integration](#firebase-integration)
6. [Tools Usage](#tools-usage)
7. [Development Tasks](#development-tasks)
8. [Production Builds](#production-builds)
9. [Bundle Compression Support](#bundle-compression-support)
10. [Future Features](#future-features)
11. [License](#license)
12. [Support](#support)


## Tech Stack <a name="tech-stack"></a>
![alt text](http://i.imgur.com/hYzMgK3l.jpg "Tech Stack")

- React
  - [X] React
  - [X] React Hot Loader
  - [X] React Router
- Tools
  - [X] Reactotron
  - [X] Webpack Dashboard
- Redux
  - [X] Redux
  - [X] React Redux
  - [X] React Router Redux
  - [X] Redux Thunk
  - [X] Redux Dev Tools
- Webpack    
  - [X] Webpack
  - [X] Webpack Dev Middleware
  - [X] Webpack Hot Middleware
- Firebase
  - [X] Firebase
- Linting
  - [X] Eslint
- Styles
  - [X] Bootstrap
- Testing
  - [X] Mocha
  - [X] Enzyme
  - [X] Sinon


## Features <a name="features"></a>

- Awesome React-Redux template built with webpack and ES6.
- Firebase integration.
- Sample login screen with Firebase authentication.
- Sample registration screen with Firebase user authentication.
- Optimized production build for webpack with gzip compression.
- Ultimate Webpack Dashboard for development mode.
- Integration of Reactotron with Redux.
- Usage of Node Express server rather than Webpack dev server.
- ESLint with Airbnb's config as base.

## Prerequisite <a name="prerequisite"></a>

Please make sure that before starting the app, the firebase config is populated appropriately in config.js.

Before starting the app, firebase is initialized and hence if it doesnt find the key params, it will fail.

## Dev Usage <a name="dev-usage"></a>

```
git clone https://github.com/RanjithNair/react-redux-webpack-es6-firebase-boilerplate.gitc
cd react-redux-webpack-es6-firebase-boilerplate
npm install
npm run dev
```
## Firebase Integration <a name="firebase-integration"></a>

- Go to your firebase console for your project.
- Copy the firebase config and paste it in config.js

## Tools Usage <a name="tools-usage"></a>

- Download [Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/installing.md) and open it to capture logs and redux data.
- `npm run dev` will open up the application in dev mode and will open Webpack Dashboard.

## Development Tasks <a name="development-tasks"></a>

- `npm run dev` run the web app with lint and tests in watch mode
- `npm run lint` linting javascript code usig eslint
- `npm run test:watch` test using mocha, enzyme & sinon.

## Production Builds <a name="production-builds"></a>

- `npm run start` will start the application with production build.
- `npm run build:prod` will create the production build in dist folder.

## Bundle Compression Support <a name="bundle-compression-support"></a>

For the production build, it has compression enabled. The underlying node server returns back the compressed version on request of js files thus making the loading of the application faster.

## Future Features <a name="future-features"></a>

- [ ] Upgrade to Webpack2 and using the tree-shaking feature to minimize bundle size.
- [ ] Use [ReduxSauce](https://github.com/skellock/reduxsauce) & [Redux Sagas](https://github.com/redux-saga/redux-saga) instead of Redux thunk.
- [ ] Service worker support.
- [ ] Docker support.

## License <a name="license"></a>
This project is licensed under the [MIT License](https://github.com/RanjithNair/MalayalaSangeethamInfoAPI/blob/master/LICENSE)

## Support <a name="support"></a>
If you would like to support this project, you can donate :-

 [![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/rjnair)
## Author

Ranjith Nair
