const express = require("express");
const server = express();
const {Activity} = require("../db.js")
const {Op} = require('sequelize')

server.get("/", async (req, res) => {
    try {
      const activities = await Activity.findAll();
      return res.json(activities);
    } catch (error) {
      res.status(400).send("Something went wrong");
    }
  });

  server.post("/", async (req, res) => {
    const activity = req.body
    console.log(req.body)
    // name, difficulty, duration, seasons, countries:[names]
    try {
        //Se crea la actividad sin los paises        
        let [act, created] = await Activity.findOrCreate({
            where: {
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season,
            }
        });
        //Nos muestra si se creo o no
        console.log(created)
        //Seteo la relacion actividad-paises
        await act.setCountries(activity.countries)
        return res.json(act)
    } catch (error) {
        console.log(error)
    }
});
  

module.exports = server