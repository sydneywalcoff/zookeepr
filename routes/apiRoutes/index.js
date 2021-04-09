const router = require('express').Router();
cosnt animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);

module.exports = router;