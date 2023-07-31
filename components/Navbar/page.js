import React from 'react'
const index = () => {
  return (
    
<nav class= " p-0 sm:ml-64  max-h-fit bg-gray-100 border-gray-200 dark:bg-gray-900 " style={{
  height:"11vh"
}}>
  <span>Welcome Ali Abdal</span>
  <button className='logout_btn'></button>
  <button class=  " logout_btn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
  LogOut
</button>

</nav>

  )
}

export default index