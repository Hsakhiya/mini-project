import MenuItem from "../models/menuModel.js";

async function getMenu(req,res,next){
    let menu
    try{
        menu = await MenuItem.findById(req.params.id)
        if(menu == null){
            return res.status(404).json({message:"Cannot Find Menu"})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }

    res.menu = menu
    next()
}


export default getMenu