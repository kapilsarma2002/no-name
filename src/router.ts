import { body } from "express-validator"
import { Router } from 'express'
import { handleInputErrors } from "./modules/middleware"
import { createProduct, deleteProduct, getOneProduct, getProducts } from "./handlers/product"

const router = Router()

//product
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.post('/product/', body('name').isString(), handleInputErrors, createProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {})

 router.delete('/product/:id', deleteProduct)

//update
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional(),
  () => {}
)
router.post('/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString(),
  () => {}
)
router.delete('/update/:id', () => {})

//update point
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
)
router.post('/updatepoint', 
  body('name').isString(),
  body('description').isString(),
  body('updateId').exists().isString(),
  () => {}
)
router.delete('/updatepoint/:id', () => {})

export default router