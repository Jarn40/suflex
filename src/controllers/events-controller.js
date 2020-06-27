const db_connection = require("../db/db_connection")

class EventControler {

    static rotas() {
        return {
            home: '/',
            remove_edit: '/:id',
            create:'/new'
        }
    }

    getEvents() {
        return async (req, res) => {

            const result = await db_connection('events')
                            .leftJoin('users','users.id', '=', 'events.user_id')
                            .select([
                                'events.*'
                            ])
            return res.status(200).json(result)
        }
    }

    getEvent(){
        return async (req, res) => {
            
            const { id } = req.body

            const result = await db_connection('events').where('id', id)


            return res.status(200).json(result)
        }
    }

    addEvent() {
        return async (req, res) => {
            const { date, description, user_id} = req.body;


            await db_connection('events').insert({
                date,
                description,
                user_id
            })

            return res.status(200).json()
        }
    }

    editEvent(){
        return async (req, res) => {

            const { id, date, description } = req.body;


            await db_connection('events')
                .where('id', id)
                .update({
                    date, 
                    description
                })

            return res.status(200).json()
        }
    }


    removeEvent() {
        return async (req, res) => {
            const { id } = req.body;

            await db_connection('events').where('id',id).delete()

            return res.sendStatus(204).send()
        }
    }


}


module.exports = EventControler