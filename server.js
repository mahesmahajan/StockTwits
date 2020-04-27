const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// serve static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/build", express.static(path.join(__dirname, "build")));

// handle request bodies
app.use(bodyParser.urlencoded({ limit: "100mb", extended: false }));
app.use(bodyParser.json({ limit: "100mb" }));

// main page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

// serves as a proxy for stock twits api
app.post('/api', async (req, res) => {
    const {title} = req.body;
    const api = `https://api.stocktwits.com/api/2/streams/symbol/${title}.json`;

    try {
        let response = await axios.get(api);
        res.json(response.data);
    } catch (err) {
        res.status(400);
        res.json(err);
    }

  res.end();
});
console.log("Starting server ")
app.listen(3002);
