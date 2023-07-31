import { BsCart4 } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

import { BiCategory } from "react-icons/bi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const index = () => {
    return (
      <>
   

 <div className=" class_card_container   max-h-fit py-5 p-4 sm:ml-64  grid  gap-4  mx-auto lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1" style={
{
   marginTop: '20px'

} }>
{/* *.........Total Product .........* */}
   
  <div className=" stat_div py-2 flex justify-between">
  <span  >  
  <BsCart4 className="icons_stat"></BsCart4>
  </span>
  <div className="stat_details"> <span className="stat_heading "> Total Product </span> <br></br><span className="stat_qty"> 2 </span></div>

  </div>
{/* *.........Total Stock Value.........* */}
  <div  className=  "stat_div py-2 flex justify-between">
  <span  >
  <AiFillDollarCircle className="icons_stat"></AiFillDollarCircle>
  </span>
  <div className="stat_details">Total Stock Value  <br></br><span className="stat_qty"> 23,400.59 </span></div>
  
  </div>
  
  
{/* *.........Out Of Stock.........* */}

  <div  className="stat_div py-2 flex justify-between">
  <span  >
  <MdOutlineRemoveShoppingCart className="icons_stat"></MdOutlineRemoveShoppingCart>
  </span>
  <div className="stat_details">Out Of Stock  <br></br><span className="stat_qty"> 23,400.59 </span></div>
  
  
  
  </div>
{/* *.........all Cataggories.........* */}

  <div  className="stat_div py-2 flex justify-between">
  <span  >
  <BiCategory className="icons_stat"></BiCategory>
  </span>
  <div className="stat_details">All catagories  <br></br><span className="stat_qty"> 23,400.59 </span></div>
  
  
  
  
   </div> 
    </div>
  


 </>
    )
  }
  
  export default index