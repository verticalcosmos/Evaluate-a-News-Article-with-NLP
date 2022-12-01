// environment variables
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const requestPost = require('./handleRequest')
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')



// setup .env
const PORT = 8080
const dotenv = require('dotenv');
dotenv.config();


// server
const app = require('.');

app.listen(8080, function(){
    console.log("Server starts on port 8080");
});

//cors to avoid cors-origin issue
app.use(cors())


// express to use body-parser as middle-ware
var app = express();
app.use(bodyParser.json()) 

// Configure express static directory
app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(express.static('dist'));


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
// Post
app.post('/article', requestPost.validateInputRequest, requestPost.PostHandler);


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})


module.exports = app;