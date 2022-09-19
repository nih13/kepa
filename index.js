const express = require('express')
const keypair = require('./value')
const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

keypair();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// key value generation

var dict = {};