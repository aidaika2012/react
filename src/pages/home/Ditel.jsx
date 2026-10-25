import React from 'react'
import { useParams } from 'react-router-dom'
import { drinks } from '../../data/data'

function Ditel() {
  const {id} = useParams()
  const drink = drinks.find(el=>el.id == id)
  console.log(drink);
  
  return (
    <div>
      <img src={drink.image} alt="" />
      <h3>{drink.name}</h3>
      <h4>{drink.price}</h4>
    </div>
  )
}

export default Ditel