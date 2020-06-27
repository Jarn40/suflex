
const eventsRoutes = require('./events-routes')
const userRoutes = require('./user-routes')

module.exports = (app) => {
    app.use('/events', eventsRoutes)
    app.use('/user', userRoutes)
}