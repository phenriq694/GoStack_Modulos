const express = require('express')

const server = express()

// Query params = ?nome=Paulo
// Route params = /users/1
// Request body = {"name": "Diego", "email":"diego@rocketseat.com.br"}

server.get('/users', (req, res) => {
  const nome = req.query.nome 

  return res.json({ message : `Hello ${nome}`})
})

server.get('/users/:id', (req, res) => {
  const id = req.params.id 

  return res.json({ message : `Buscando o id ${id}`})
})

server.listen(3000)