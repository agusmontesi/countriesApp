const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activity = require("./activity");
const country = require ("./country");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/activities", activity);
router.use("/countries", country)

module.exports = router;
