import React, { useEffect, useState } from 'react'
import Foodinfo from '../Foodinfo/Foodinfo'

function Shop() {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
      .then(res => res.json())
      .then(data => setFoods(data.meals))
  }, [])
  console.log(foods)
  return (
    <div className='grid grid-rows-3 grid-flow-col gap-4 m-5 p-5'>
      {foods.map(food => <Foodinfo key={food.idMeal} food={food}></Foodinfo>)}
    </div>
  )
}

export default Shop