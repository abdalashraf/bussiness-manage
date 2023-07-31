import db from "../../../../DataBass/db";
import Product from "../../../../Schema/ProductSchema";
import { NextResponse } from "next/server";


export async function POST(request) {
   db.connect();
const {productName,productDescription,productSalePrice,productCostPrice,productQunatity,productSize,productColor}=await request.json()

 let newProduct= await Product.create( {productName,productDescription,productSalePrice,productCostPrice,productQunatity,productSize,productColor});
   await newProduct.save()
 return NextResponse.json({ success: true });




};


