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
            const countriApi = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: "%" + name + "%"
                    }
                },
            });
            //Verifico si me llega data, la mando:
            console.log(countriApi)
            if (countriApi) {
                res.send(countriApi)
            } else {
            //sino mando un error
                res.send("No se ha podido encontrar el pais indicado")
            }
        }  else if (req.query.activity){
            const actividad = req.query.activity
            const fActivity = await Country.findAll({
                include:{
                    model: Activity,
                    where: {
                        name: actividad
                    },
                    required: true
                }
            })
            return res.json(fActivity)
        } else {
            //Busco toda la data desde la db y la guardo en la variable data:
            const data = await Country.findAll();
            res.send(data)
         }
});



//Obtengo el detalle de un pais en particular: 
server.get("/:id", async (req, res) => {
    //Guardo en una variable el params:
    const {id} = req.params;
    //Me traigo los datos de la base de datos
    try {
    const actividad = await Country.findByPk(id.toUpperCase(), {
        include: Activity
    })
        res.send(actividad);
        //Sino me tira el error y me lo consologuea:
    } catch (error) {
        console.log(error)
    }
});



module.exports = server;