const client = require('../config/database')
const { nanoid } = require('nanoid')

exports.post = (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(500).send('You should fill all fields')
    }

    const short_url = nanoid(5)

    client.query(`INSERT INTO babulink (short_url, url) VALUES ($1, $2);`, [short_url, url], (err) => {
        if (err){
            console.log(err)
            return res.status(500).send({
                note: 'An error has occurred'
            })
        }

        return res.status(200).send({ data: short_url})
    })
}   