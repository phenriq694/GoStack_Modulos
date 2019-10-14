const express = require('express')

const server = express()

// Query params = ?nome=Paulo
// Route params = /users/1
// Request body = {"name": "Diego", "email":"diego@rocketseat.com.br"}

server.get('/users', (req, res) => {
  const nome = req.query.nome 

  return res.json({ message : `Hello ${nome}`})
})

const users = ['Diego', 'Cláudio', 'Victor']

server.get('/users/:index', (req, res) => {
  const { index } = req.params

  return res.json(users[index])
})

server.listen(3000)