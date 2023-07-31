/* eslint-disable import/no-anonymous-default-export */
import db from "../../../DataBass/db";
import Product from "@/Schema/ProductSchema";

db.connect();

export default async (req, res) => {
  try {
    let deleteproduct = await Product.findByIdAndDelete(req.query.id);
    if (deleteproduct) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};
