var express = require('express');
var handlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 5000;

var nav = [
  {
    Link: '/books',
    Text: 'Books'
  },
  {
    Link: '/authors',
    Text: 'Author'
  }
];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', '.ejs');

app.use('/books', bookRouter);
app.get('/', function (req, res) {
  res.render('index', {
    title: 'hello from handlebars',
    nav: nav
  });
});

app.listen(port, function (err) {
  console.log('server running on port ' + port);
});
