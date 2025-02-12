import express from "express"
import MenuController from "../controllers/menuController.js"
import MenuItem from "../models/menuModel.js"
const router = express.Router()




router.get('/menu/getItems',MenuController.getItem)

router.post('/menu/addItem',MenuController.addItem)

router.delete('/menu/delete',MenuController.deleteItem)

router.patch('/menu/update',MenuController.updateItem)





export default router