const open = require('open');
const colors = require('colors/safe');
const Server = require('./server.js');
const port = (process.env.PORT || 8080);
const app = Server.app();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = process.env.NODE_ENV !== 'production' ? require('../webpack.config.dev.js') : require('../webpack.config.prod.js');
const compiler = webpack(config);
app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.listen(port, (error) => {
  if (error) {
    console.log(colors.red(error));
  } else {
    console.log(colors.green(`Listening at http://localhost:${port}`))
    if (process.env.NODE_ENV !== 'production') {
      open(`http://localhost:${port}`);
    }
  }
});
