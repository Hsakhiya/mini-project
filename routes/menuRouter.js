import express from "express"
import MenuController from "../controllers/menuController.js"
const router = express.Router()




router.get('/getmenu',MenuController.getMenu)

router.post('/addmenu',MenuController.addMenu)





export default router