import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExlporeMenu from '../../components/ExploreMenu/ExlporeMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All")
  
  return (
    <div>
      <Header />
      <ExlporeMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home