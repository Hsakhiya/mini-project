import MenuItem from '../models/menuModel.js'

class MenuController{
    static getMenu =  async(req,res)=>{
        try {
            const menu = await MenuItem.find()
            res.status(201).json(menu)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static addMenu = async(req, res)=>{
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
}


export default MenuController