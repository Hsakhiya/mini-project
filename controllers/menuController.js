import MenuItem from '../models/menuModel.js'

class MenuController{
    static getItem =  async(req,res)=>{
        try {
            const menu = await MenuItem.find()
            res.status(201).json(menu)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static addItem = async(req, res)=>{
        try {
            const {name,description,price,category,isAvailable,imageUrl,createdAt} = req.body
            const item = await MenuItem.findOne({name:name})
            if(item){
                res.status(405).json({message:"Menu already exists"})
            }else{
                if (name&&price&&category) {
                    const newMenu = new MenuItem({
                        name: name,
                        description: description,
                        price: price,
                        category: category,
                        isAvailable: isAvailable,
                        imageUrl: imageUrl,
                        createdAt: createdAt
                    })
    
                    const doc = await newMenu.save()
                    res.status(201).json(doc)
    
                } else {
                    res.status(405).json({message: "Missing Fields"})
                }
            }
            
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    static deleteItem = async(req,res)=>{
        try{
            const menu = await MenuItem.findById(req.body.id)
            if (menu) {
                await menu.deleteOne()
                res.json({message:"Deleted Item"})
            } else {
                res.status(404).send({message:"Item not found"})
            }
            
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }


    static updateItem = async (req,res) => {
        try {
            const menu = await MenuItem.findById(req.body.id)
            if (menu) {
                menu.name = req.body.name
                menu.description = req.body.description
                menu.price = req.body.price ?? menu.price
                menu.category = req.body.category ?? menu.category
                menu.isAvailable = req.body.isAvailable

              

               try {
                 const updateItem = await menu.save()
                 res.status(200).json(updateItem)
               } catch (error) {
                    res.status(500).json({message: error.message})
               }

            } else {
                res.status(404).json({message:"Item Not Found"})
            }
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    
}


export default MenuController