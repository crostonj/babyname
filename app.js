var express = require('express');
var app = express();
var os = require("os");
var babyNames = require('./babyNames')();


var port = 80;

app.get('/', function (req, res) {
    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Baby Names</title>
        </head>
        <body>
            <h1>Baby Names</h1>
            <form action="/girls" method="get">
                <label for="rank">Rank:</label><br>
                <select id="rank" name="rank">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="all">All</option>
                </select><br>
                <input type="submit" value="Get Top Girl Names">
            </form>
            <form action="/boys" method="get">
                <label for="rank">Rank:</label><br>
                <select id="rank" name="rank">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="all">All</option>
                </select><br>
                <input type="submit" value="Get Top Boy Names">
            </form>
        </body>
        </html>
    `;

    res.send(html);
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