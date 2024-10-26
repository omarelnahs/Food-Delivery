import React from 'react'
import './Header.css'
const Header = () => {
  return <>
    <header className="container">
      <div className="">
        <div className="header-contents absolute flex flex-col items-start gap-5 ">
          <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-white'>Order Your Favourite Food Here</h2>
          <p className='text-white text-sm md:text-xl'>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredients and culinary expertise. </p>
          <button className='btn bg-white text-black px-4 py-2 md:px-8 md:py-4 rounded-2xl text-sm md:text-xl'>View Menu</button>
        </div>
      </div>
    </header>
  </>
}

export default Header