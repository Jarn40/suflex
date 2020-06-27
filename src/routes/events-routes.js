const { Router } = require('express')
const EventController = require('../controllers/events-controller')


const passport = require('passport')
require('../config/passport')
const jwtPassport = passport.authenticate('jwt', { session: false });

const router = Router()

const eventController = new EventController()
const eventRoutes = EventController.rotas()


router.get(eventRoutes.home, jwtPassport, eventController.getEvents())

router.post(eventRoutes.create, jwtPassport, eventController.addEvent())

router.route(eventRoutes.remove_edit)
    .all(jwtPassport)
    .get(eventController.getEvent())
    .put(eventController.editEvent())
    .delete(eventController.removeEvent())

module.exports = router