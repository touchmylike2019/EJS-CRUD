/*
    CRUD: Express.js, Mongoose
*/ 

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const router = require('./routes/')

const app = express()

//Set environments
app.use(express.static(path.join(__dirname, 'public')))
app.use('/edit/:id', express.static(path.join(__dirname, 'public')))

//Set variables
app.set('port', process.env.PORT || 8081)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use('/', router)

//Connect datatabase
mongoose.connect('mongodb://localhost/node-crud')
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

app.listen(app.get('port'), () => console.log(`Server started on port: ${app.get('port')}...`))
