import React from 'react'
import '../Style.css';
import data from '../../data';
import { useParams } from 'react-router-dom'

const HomePageThree = () => {
  const { id  } = useParams();
  return (
    <div className="life">
    <div className='sideA'>
     {data.all.filter((card,index) => card.id == id).map((card, index) =>(
      <div className="params">
       <img src={card.img} />
       <h1>{card.name}</h1>
      </div>
     ))}
    </div>
    </div>
  )
}

export default HomePageThree