import React from 'react';
import { useState } from 'react';
import './styles.css'

const NumberRange = () => {
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [result, setResult] = useState()

  const handleDraw = () => {
    var ar = []
    var id
 
    if(max > min) {
      for(var i=min; i<=max; i++) {
        ar.push(String(i))
      }
  
      id = parseInt(Math.random() * ar.length)
      setResult(ar[id])
    } else {
      alert('Max range needs to be higher than Min Range')
    }
  }

  return (
    <div className="numberRange">
      <h1>Number Range</h1>
      <div className="nr-input-wrapper">
        <input type="number" className="minRange" placeholder='Min Range' onChange={e=> setMin(parseInt(e.target.value))}/>
        <input type="number" className="maxRange" placeholder='Max Range' onChange={e=> setMax(parseInt(e.target.value))}/>
      </div>
      <button className='nr-draw' onClick={handleDraw}>Draw</button>
      <div className="nr-result-wrapper">
        <p>RESULT:</p>
        <p className='result'>{result}</p>
      </div>
    </div>
  )
}

export default NumberRange