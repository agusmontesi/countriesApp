const express = require("express");
const server = express();
const {Activity} = require("../db.js")

server.post("/", async (req, res) => {
    const activity = await Activity.create({
        name : req.body.name,
        difficulty: req.body.difficulty,
        duration: req.body.duration,
        season: req.body.season
    });
    await activity.setCountries(activity.id)
    res.send(activity)
})

module.exports = server