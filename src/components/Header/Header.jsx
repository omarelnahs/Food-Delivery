import React from 'react'
import './Header.css'
const Header = () => {
  return <>
    <header className="container px-2">
      <div className="header-contents py-2">
        <h2 className='text-xl md:text-4xl lg:text-6xl font-bold text-white'>Order Your Favourite Food Here</h2>
        <p className='text-white text-sm md:text-xl'>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredients and culinary expertise. </p>
        <button type='submit' className='btn bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-xl text-sm md:text-xl'>View Menu</button>
      </div>
    </header>
  </>
}

export default Header