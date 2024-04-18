var express = require('express');
var app = express();
var os = require("os");
var babyNames = require('./babyNames')();


var port = 443;


app.get('/', function (req, res) {

    res.send("Hello World");
});

app.get('/girls', function (req, res) {
    var rank = req.query['rank'];
    let girlNames = babyNames.getGirlName(rank);

    // Generate the HTML list items
    res.send(generateHTML("Girls", girlNames)); // Send the HTML 
});

app.get('/boys', function (req, res) {
    var rank = req.query['rank'];
    let names = babyNames.getBoyName(rank);
    res.send(generateHTML("Boys", names));
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});

function generateHTML(Title, Names) {
    let listItems = Names.map(name => `<li>${name}</li>`).join('');

    // Generate the HTML
    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${Title}</title>
        </head>
        <body>
            <h1>Names</h1>
            <ul>
                ${listItems}
            </ul>
        </body>
        </html>
    `;

    return html;
}