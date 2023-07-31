import db from "../../DataBass/db";
import newuser from "../../Schema/UserSchema";

const jsonwebtoken = require('jsonwebtoken');
db.connect()
export default async (req,res)=>{
const token=req.boby

    try{
       const decoded= jsonwebtoken.verify(token,'big apple')
let userMilgya = await newuser.findById(decoded)

        
if (userMilgya) {
    res.json({ success: true, userMilgya });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
} catch (error) {
  // Handle token verification errors
  res.status(401).json({ success: false, message: 'Invalid token' });
}
}