const express = require('express')
const vue = require ('vue')
const app = express()
const port = 5432

var test = ['test1', 'test2', 'test3']

app.get('/', function (req,res) {
    res.status(200).json(test)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})