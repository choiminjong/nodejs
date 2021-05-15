// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');

// [MONGODEB CONFIG]
mongoose.connect('mongodb://localhost/mongodb_tutorial', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error))

// [MONGODEB MODEL DB]
var Book = require('./models/book');

// [CONFIGURE APP TO USE bodyParser express 4.16.0 ]
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [CONFIGURE ROUTER]
var router = require('./routes')(app, Book);

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 3000;

// [RUN SERVER]
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});