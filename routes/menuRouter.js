import express from "express"
import MenuController from "../controllers/menuController.js"
import MenuItem from "../models/menuModel.js"
import getMenu from "../middleware/menu-middleware.js"
const router = express.Router()




router.get('/menu/getItems',MenuController.getItem)
router.get('/menu/getItems/:id',MenuController.getItemById)

router.post('/menu/addItem',MenuController.addItem)

router.use('/menu/delete/:id',getMenu)
router.delete('/menu/delete/:id',MenuController.deleteItem)

router.use('/menu/update/:id',getMenu)
router.patch('/menu/update/:id',MenuController.updateItem)





export default router