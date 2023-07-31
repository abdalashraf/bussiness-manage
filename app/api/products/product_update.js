import db from "../../../DataBass/db";
import Product from "@/Schema/ProductSchema";
db.connect()
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req,res)=>{
   try{
    let updateProduct =await Product.findByIdAndUpdate(req.query.id,req.body)
    if(updateProduct){
        res.status(200).json({success:true})
    }
    else{
        res.status(404).json({success:false})
    }
   }catch(error){
    console.log(error)
   }
}