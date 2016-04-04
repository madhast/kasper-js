var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express();

app.use(bodyParser.json());

app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/app', express.static(__dirname + '/../app'));
app.use('/api', express.static(__dirname + '/api'));

app.use('/*', express.static(__dirname + '/../app/'));
app.use('/', express.static(__dirname + '/../app/'));
app.use(express.static(__dirname + '/../app/'));

var server = app.listen(process.env.PORT || 8888, function () {
    console.log('Server start on http://localhost:8888/');
});
