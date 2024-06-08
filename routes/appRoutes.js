import express from 'express'
import { inicio } from '../controllers/appController.js'

const routes = express.Router()

routes.get('/', inicio)




export default routes;