const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
// const zookeeperRoutes = require('./zookeeperRoutes');

router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;