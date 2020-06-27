const { Router } = require('express')
const passport = require('passport')
require('../config/passport')
const router = Router()

const UserControlador = require('../controllers/users-controller') 
const userRotas = UserControlador.rotas();

const userControlador = new UserControlador();
const localPassport = passport.authenticate('local', { session: false });

router.post(userRotas.logar, localPassport, userControlador.logar())


module.exports = router