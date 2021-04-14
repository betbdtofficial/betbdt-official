const { getUser, registraionUser } = require('./Controllar');
const router = require("express").Router()


router.get('/', getUser);
router.post('/', registraionUser);
module.exports = router;