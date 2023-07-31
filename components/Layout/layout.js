
import AsideBar from "../AsideBar/page"
// import Navbar from "../Navbar/index"
import Card from "../Card/page"



export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <div >
    <AsideBar/>
    {/* <Navbar/> */}
    <Card class="p-4 sm:ml-64 mt-9"  />
    
        <main className="sm:ml-64">{children}</main>
        
        </div>
  )
}