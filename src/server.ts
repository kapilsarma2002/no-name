// const express = require('express')
import express from 'express'

const server = express()

server.get('/', (req, res) => {
  console.log('hello from server')
  res.status(200)
  res.json({message : 'hello'})
})

// module.exports = server
export default server