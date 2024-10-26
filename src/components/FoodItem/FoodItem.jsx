import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../content/StoreContext'

const FoodItem = ({ id, name, price, desc, image }) => {
  
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  
  return (
    <div className='food-item flex flex-col border mb-3' id={id}>
      <div className="food_item_img_container">
        <div className='image w-full relative'>
          <img src={image} className='w-full item-image' alt="food item" />
          {!cartItems[id]
            ? <img src={assets.add_icon_white} alt="add" className='absolute bg-white bottom-2 right-2 rounded-full' onClick={() => addToCart(id)} />
            : <div className='absolute bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-2'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p className='mx-2'>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          }
        </div>
        <div className="food_item_info px-4 py-2 flex justify-between items-center">
          <p className='font-bold text-lg'>{name}</p>
          <img src={assets.rating_starts} alt="stars" className='' />
        </div>
        <p className="food_item_desc px-4 py-2 text-gray-400">{desc}</p>
        <div className="food_item_price px-4 mt-2 pb-4">
          <p className='font-bold text-3xl text-red-400'>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem