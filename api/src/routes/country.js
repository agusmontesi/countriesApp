const express = require("express");
const server = express();
const axios = require("axios");
const {Op} = require("sequelize");
const {Activity, Country} = require("../db.js")

//Traigo las primeras 10 naciones:
server.get("/", async (req, res) =>{
    const name = req.query.name;
        if (name) {
            //Guardo en una variable y uso el endpoint de buscar paises por nombre:
            const countriApi = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            //Verifico si me llega data, la mando:
            if (countriApi) {
                res.send(countriApi.data)
            } else {
            //sino mando un error
                res.send("No se ha podido encontrar el pais indicado")
            }
        } else {
            //Busco toda la data desde la db y la guardo en la variable data:
            const data = await Country.findAll();
            //Solo traigo las primeras 10:
             const cut = data.slice(0,10)
            res.send(cut)
         }
});


//Obtengo el detalle de un pais en particular: 
server.get("/:id", async (req, res) => {
    //Guardo en una variable el params:
    const {id} = req.params;
    //Me traigo los datos de la api y la guardo en la varibale api:
    const api = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`);
    try {
        //ESTO ESTA AUN SIN RESOLVER!!!!!!!!!!!!!!!!!!!
        const activities = await Activity.findByPk();
        //Creo un objeto con las propiedades que quiero que SOLO me traiga de la api
         const city = {
            img: api.data.flag,
            name: api.data.name,
            id: api.data.alpha3Code,
            continent: api.data.region,
            capital: api.data.capital,
            subregion: api.data.subregion,
            area: api.data.area,
            population: api.data.population,
            turistAct: null
        };
        //Devuelvo ese objeto y lo mando:
        res.send(city);
        //Sino me tira el error y me lo consologuea:
    } catch (error) {
        console.log(error)
    }
});



module.exports = server;