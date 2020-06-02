import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({'status': 'ok'})
})

app.listen(3333)