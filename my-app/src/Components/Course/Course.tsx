import React from 'react'
import '../Style.css';
import quotes from '../../Quote';

const Course = () => {
  return (
    <div>
      <div className='Course'>
        <div className="left">
          <h1>Quotes On Life Lessons</h1>
        
           {
            quotes.quote.map((text, index ) => (
              <ul className="up" key={index}>
              <li className="ol">
                {text.text}
              </li>
              </ul>  
            ))
           }
        </div>
        <div className="right"></div>
      </div>

    </div>
  )
}

export default Course