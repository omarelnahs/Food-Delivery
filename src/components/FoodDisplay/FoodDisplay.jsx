import React, { useContext } from 'react'
import { StoreContext } from '../../content/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
  
  const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display container mx-auto px-2' id='food-display'>
      <h2 className='font-bold text-xl mb-5 md:text-3xl'>Top Dishes near you</h2>
      <div className='food-display-list flex flex-wrap justify-center md:justify-between gap-2'>
        {food_list
          .filter(item => {
            if (category === "All") {
              return item
            } else {
              return item.category === category
            }
          })
          .map((item, index) => {
            return <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              desc={item.description}
              image={item.image}
            />
          })
        }
      </div>
    </div>
  )
}

export default FoodDisplay