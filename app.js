const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/home-page.html');

    // console.log(req.body.button);

});

app.post('/', function(req, res) {
    res.redirect('/game');
})

app.get('/game', function(req, res) {
    res.sendFile(__dirname + '/game.html');
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running')
});