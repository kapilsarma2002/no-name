// const express = require('express')
import express from 'express'
import router from './router'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((req,res,next)=> {
  req.secret = 'virat kohli'
  next()
})


app.get('/', (req, res) => {
  console.log('hello from app')
  res.status(200)
  res.json({message : 'hello'})
})

app.use('/api', router)

module.exports = app
// export default app