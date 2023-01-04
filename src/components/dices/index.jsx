import React, { useState } from 'react'
import './styles.css'

const Dices = () => {
  const [result, setResult] = useState()

  return (
    <div className="dices">
      <h1>Dices</h1>
      <div className="dc-input-wrapper">
        <div className="d-wrapper">
          <p>d4</p>
          <input type="number" className="d4-input" min={0} max={10} />
        </div>
        <div className="d-wrapper">
          <p>d6</p>
          <input type="number" className="d6-input" min={0} max={10} />
        </div>
        <div className="d-wrapper">
          <p>d8</p>
          <input type="number" className="d8-input" min={0} max={10} />
        </div>
        <div className="d-wrapper">
          <p>d10</p>
          <input type="number" className="d10-input" min={0} max={10} />
        </div>
        <div className="d-wrapper">
          <p>d12</p>
          <input type="number" className="d12-input" min={0} max={10} />
        </div>
        <div className="d-wrapper">
          <p>d20</p>
          <input type="number" className="d20-input" min={0} max={10} />
        </div>
        <div className="d-wrapper">
          <p>d100</p>
          <input type="number" className="d100-input" min={0} max={10} />
        </div>
      </div>
      <div className="dc-result-wrapper">
        <p>RESULT:</p>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default Dices