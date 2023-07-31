import db from "../../DataBass/db";
import newuser from "../../Schema/UserSchema";

const jsonwebtoken = require('jsonwebtoken');
db.connect();

export default async (req, res) => {
  let userMilgya = await newuser.findOne({
    name: req.body.name,
    password: req.body.password,
  });

  console.log("req", userMilgya);

  if (userMilgya) {
    const myToken=jsonwebtoken.sign({data:userMilgya._id} ,"big apple",{expiresIn:"3d"} )
    res.json({
      userMilgya,
      myToken
    })

  } else {
    res.json({ success: false });
  }
};



// import db from "../../DataBass/db";
// import newuser from "../../Schema/UserSchema";

// db.connect();

// export default async (req, res) => {

//   let user = newuser(req.body);
//   await user.save();

//   console.log("req", user);

//   res.status(200).send("User created successfully"); // Add the desired status code and message here
// };
