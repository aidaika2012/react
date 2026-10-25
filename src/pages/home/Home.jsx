import React from 'react';
import {drinks} from '../../data/data';
import Card from "../../components/Card";


export default function Home() {
  return (
    <div>
        
    {
      drinks.map((el)=>(
        <Card data={el}/>
      ))
      
    }

 
    </div>
  )
}
