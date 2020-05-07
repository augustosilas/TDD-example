const routes = require('express').Router()
const { User } = require('./app/models')

User.create({ 
    name: 'Diego', 
    email: 'augusto.fernandes775@gmail.com',
    password_hash: '16461651861651661'
})

module.exports = routes