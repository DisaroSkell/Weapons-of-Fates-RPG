const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const port = 6942

const corsOptions = {
    origin: "*"
}

// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

require("./routes/Enemies")(app)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})