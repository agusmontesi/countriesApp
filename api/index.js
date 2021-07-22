//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require("axios");
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001,async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    await axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      response.data.forEach(async element => {
        try {
          var country = {
            id: element.alpha3Code,
            name: element.name,
            capital: element.capital,
            flag: element.flag,
            continent: element.region,
            subregion: element.subregion,
            area: element.area,
            population: element.population,
        }
        await Country.create(country)
        } catch (error) {
          console.log(error)
        }});
    })
    .catch((err) => console.log(err));

  });
});
