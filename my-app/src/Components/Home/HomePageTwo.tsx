import React, { useState } from 'react'
import data from '../../data';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom';

const HomePageTwo = () => {
    const [note, setAll] = useState(8);
    const [text, setText] = useState('More.....')
    const HandleIt = () => {
       setAll(note + 20)
       setText('')
    }

    const slice = data.all.slice(0, note)
    const natigate = useNavigate()
    
  return (
    <div>
        <div className="down">
              <div className="down-line">
               <div className="row">
             {
                slice.map((lis) => (
                    <>
                    <div className="col" key={lis.id}>
                        <img src={lis.img} alt={lis.img} />
                        <div className="text-line">
                        <h3>{lis.name}</h3>
                        <Link to={`/card/${lis.id}/`}>Life has no meaning. ... </Link>
                        </div>
                    </div>
                    </>
                ))
             }
               </div>
               <button className="ddd" onClick={HandleIt}>{text}</button>
                </div> 
        </div>
    </div>
  )
}

export default HomePageTwo