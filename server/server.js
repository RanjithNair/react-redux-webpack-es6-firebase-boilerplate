const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/../src/index.html')
    const publicPath = express.static(path.join(__dirname, '../public'))

    app.use('/public', publicPath)
    app.get('*.js', (req, res, next) => {
      if (process.env.NODE_ENV === 'production') {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
      }
      next();
    });
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
