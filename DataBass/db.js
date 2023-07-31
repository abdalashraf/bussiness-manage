import mongoose from "mongoose";
const connect =()=>{
if(mongoose.connection.readyState>=1){
  return
}
mongoose.connect(process.env.DB_URL)
}
const db = { connect };
export default db;

// const connect = () => {
//   try {
//     mongoose
//       .connect(
//         "mongodb+srv://aliabdal12345:ali123@cluster0.isu4hkx.mongodb.net/?retryWrites=true&w=majority"
//       )
//       .then(function (connection) {
//         console.log(connection);
//       });

//     // console.log(connect)
//   } catch (e) {
//     console.log(e);
//   }
// };
// const db = { connect };
// export default db;
