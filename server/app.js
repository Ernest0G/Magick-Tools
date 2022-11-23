const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 5000;
const mtg = require('mtgsdk');

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})

app.get("/suggestions/:cardSearched", (req, res) => {
    const cardToSearch = req.params.cardSearched;
    const suggestedNames = Array(5);
    fs.readFile('./assets/AllCardNames.txt', function (err, data) {
        if (err) throw err;
        const lines = data.toString().split("\n");
        lines.forEach(line => {
            if (line.startsWith(`${cardToSearch}`)) {
                console.log(line);
                suggestedNames.push(line);
            }
            console.log(suggestedNames);
        })

    });
    res.json(line);

});


app.get("/searchcard/:cardSearched", (req, res) => {
    const cardToSearch = req.params.cardSearched;
    try {
        mtg.card.where({ name: `${cardToSearch}` })
            .then(result => {
                res.json(result[0]);
            })
    } catch (error) {
        console.log(error);
        res.json({ name: 'Card not found' });

    }

});