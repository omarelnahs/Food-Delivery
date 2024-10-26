import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExlporeMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu container mx-auto' id='explore-menu'>
      <h1 className='font-bold text-xl mb-5 md:text-3xl'>Explore Menu</h1>
      <p className='mb-5'>Choose from our diverse selection of dishes, prepared with the finest ingredients and expertly crafted to perfection</p>
      <div className='explore-menu-list flex justify-between items-center gap-2 scroll'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-item cursor-pointer'>
              <div className='w-16 md:w-32 rounded-full'>
                <img src={item.menu_image} alt="menu" className={category === item.menu_name ? "active" : ""} />
              </div>
              <p className='text-center'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-10 mx-0 h-1 bg-gray-300 rounded-full' />
    </div>
  )
}

export default ExlporeMenu