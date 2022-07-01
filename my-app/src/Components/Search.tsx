import React, {useState} from 'react'
import Course from './Course/Course'
import "./Style.css"
import quotes from '../Quote';

const Search = () => {

  const [quare, setQuare] = useState("")
  
  // console.log(quotes.quote.filter(item=> item.text.toLowerCase().includes("li")))

  return (
    <div>
      <div className="search">
        <div className="input"><input type="text" placeholder="Search...." 
        onChange={(e) => setQuare(e.target.value)}/></div>
        <div className="land"></div>
        <div className="teldown">
        <div className="lef">
           {
            quotes.quote.filter(item=> item.text.toLowerCase().includes(quare.toLowerCase())).map((text, index ) => (
              <ul className="up" key={index}>
              <li className="On">
                {text.text}
              </li>
              </ul>  
            ))
           }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Search