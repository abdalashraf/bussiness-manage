/* eslint-disable import/no-anonymous-default-export */
import db from "../../../DataBass/db";
import Product from "@/Schema/ProductSchema";
db.connect()
export default async(req,res)=>{
  try{
    let productFound = await Product.findById( req.query.some );

    if(productFound){
        res. status(200).json(productFound)
    }
  }catch(error){
    console.log(error)
  }
}