const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set("trust proxy", true);

app.get("/", (req, res) => {
    console.dir(req.ip);
    var ip = {
        ip: req.ip,
        headers: req.headers["x-forwarded-for"],
        socket: req.socket.remoteAddress,
    };
    res.send(JSON.stringify(ip));
});

app.listen(7777, (err) => {
    console.log("Listening from port 7777");
});
