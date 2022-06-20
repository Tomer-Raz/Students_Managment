const express = require('express')
const cors = require('cors')
require('./configs/database')

const studentsController = require('./Controller/studentsController')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/students', studentsController)

app.listen(8000,
    () => console.log("Server is running (port 8000)"))

