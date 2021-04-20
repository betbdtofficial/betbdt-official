const { getUser, registraionUser, specificUser } = require('./Controllar');
const router = require("express").Router()


router.get('/', getUser);
router.get('/specificUser', specificUser);
router.post('/', registraionUser);
module.exports = router;