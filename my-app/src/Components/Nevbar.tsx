import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineAlignLeft } from "react-icons/ai";
import './Style.css'
const Nevbar = () => {

  const [nevbar, setNevbar] = useState(false);
  const [shown, setShown] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 80) {
      setNevbar(true)
    }else{
      setNevbar(false);
    }
  }
  window.addEventListener('scroll', changeColor);
  return (
    <ul className={nevbar ? "al active" : "al"}>
      <div className={shown ? "line active-line" : 'line'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/course">Quotes</Link></li>
        <li><Link to="/search">Search Quotes</Link></li>
        </div>
        <AiOutlineAlignLeft className="icon" onClick={() => setShown(!shown)} />
    </ul>

  )
}

export default Nevbar