var app = require('./app');

app.listen(process.env.PORT || 9090, function () {
  console.log('%s listening at %s', app.name, app.url);
});