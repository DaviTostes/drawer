import React from 'react';
import { useState } from 'react';
import './styles.css'

const NumberRange = () => {
  const [result, setResult] = useState('')

  return (
    <div className="numberRange">
      <h1>Number Range</h1>
      <div className="nr-input-wrapper">
        <input type="number" className="minRange" min={0} placeholder='Min Range' />
        <input type="number" className="maxRange" min={0} placeholder='Max Range' />
      </div>
      <button className='nr-draw'>Draw</button>
      <div className="nr-result-wrapper">
        <p>RESULT:</p>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default NumberRange