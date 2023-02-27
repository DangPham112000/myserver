const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set("trust proxy", true);

app.get("/all", (req, res) => {
    var ip = {
        ip: req.ip,
        headers: req.headers["x-forwarded-for"],
        socket: req.socket.remoteAddress,
    };
    res.send(JSON.stringify(ip));
});

app.get("/:ts", (req, res) => {
    console.log(req.params.ts);
    var ip = {
        ip: req.ip,
        headers: req.headers["x-forwarded-for"],
        socket: req.socket.remoteAddress,
    };
    console.log(ip);
    res.send(
        JSON.stringify({
            ip:
                req.ip ||
                req.headers["x-forwarded-for"] ||
                req.socket.remoteAddress,
            ts: req.params.ts,
        })
    );
});

app.get("/", (req, res) => {
    res.send(
        req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress
    );
});

app.listen(80, (err) => {
    console.log("Listening from port 80");
});
