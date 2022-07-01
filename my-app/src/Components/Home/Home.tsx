import React from 'react'
import '../Style.css'
import { img } from '../images'
import HomePageTwo from './HomePageTwo'

const Home = () => {
  return (
    <>
   <div>
    <div className="main">
   <img src={img} />
   <div className="topImg">
    <h2>“Beauty is not in the face; beauty is a light in the heart.”</h2>
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/TmRgK-pXH9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
   </div>
   <div className="class">
   <h2 className="assum">Don’t compare your life to others’. <span>You have no idea what their journey is all about.</span></h2>
   </div>
   {/* <h1 style={{textAlign:"center"}}>26 Sad Quotes That Will Get You Through Your Absolute Toughest Days</h1> */}
    </div>
   </div>
   <HomePageTwo />
   </>
  )
}

export default Home