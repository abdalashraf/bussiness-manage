/* eslint-disable import/no-anonymous-default-export */
import Product from "@/Schema/ProductSchema";
import db from "../../../DataBass/db";
db.connect()
export default  async(req,res)=>{
  try{
    let product=await Product.find()
    res.json(product)
  }
  catch(error){
    console.log(error)
  }
}