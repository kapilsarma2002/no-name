import { body, validationResult } from "express-validator"
import { Router } from 'express'

const router = Router()

//product
router.get('/product', (req, res) => {
  res.json({message : req.secret})
})
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), (req, res) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    res.status(400)
    res.json({ errors : errors.array() })
    return
  }
  res.json('Request succesful')
  console.log(req.secret)
})
router.post('/product',() => {})
router.delete('/product/:id', () => {})

//update
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})

//update point
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint/:id', () => {})

export default router