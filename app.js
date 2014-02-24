var restify = require('restify');

var app = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());

app.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

module.exports = app;