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

    static getItemById =  async(req,res)=>{
        try {
            const menu = await MenuItem.findById(req.params.id)
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


    static deleteItem = async (req,res)=>{
        try {
            await res.menu.deleteOne()
            res.status(200).json({message:"Item deleted successfully"})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }


    static updateItem = async (req,res) => {
        try {
            const menu = res.menu
            menu.name = req.body.name
            menu.description = req.body.description
            menu.price = req.body.price ?? menu.price
            menu.category = req.body.category ?? menu.category
            menu.isAvailable = req.body.isAvailable
            
            const updateItem = await menu.save()
            res.status(200).json(updateItem)
    
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    
}


export default MenuController