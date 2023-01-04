import { useEffect, useState } from 'react'
import './App.css'
import NumberRange from './components/numberRange'
import Dices from './components/dices'

function App() {
  const [stage, setStage] = useState('ip')

  const handleChangeToNR = () => {
    setStage('nr')
  }

  const handleChangeToDC = () => {
    setStage('dc')
  }

  const handleChangeToLW = () => {
    setStage('lw')
  }

  const handleChangeToIP = () => {
    setStage('ip')
  }

  useEffect(() => {
    const ip = document.querySelector('.ip-wrapper')
    const nr = document.querySelector('.nr-wrapper')
    const dc = document.querySelector('.dc-wrapper')
    const lw = document.querySelector('.lw-wrapper')
    const returnButton = document.querySelector('.return')
    const arrayStages = [ip, nr, dc, lw]

    for(var i=0; i<arrayStages.length; i++) {
      if(arrayStages[i].className.includes(stage)) {
        arrayStages[i].style.display = 'block'
      } else {
        arrayStages[i].style.display = 'none'
      }
    }

    if(stage == 'ip') {
      returnButton.style.display = 'none'
    } else {
      returnButton.style.display = 'block'
    }

  }, [stage])

  return (
    <div className="App">
      <header>
        <h1>Drawer</h1>
      </header>
      <div className="drawer-wrapper">
        <div className="ip-wrapper">
          <h1>Choose a drawing option</h1>
          <div className="options-wrapper">
            <button className="nr-option" onClick={handleChangeToNR}>Number Range</button>
            <button className="dc-option" onClick={handleChangeToDC}>Dices</button>
            <button className="lw-option" onClick={handleChangeToLW}>List of words</button>
          </div>
        </div>
        <div className="nr-wrapper">
          <NumberRange />
        </div>
        <div className="dc-wrapper">
          <Dices />
        </div>
        <div className="lw-wrapper">
        </div>
        <button className="return" onClick={handleChangeToIP}>Return</button>
      </div>
      <footer>
        <p>Made by <a href="https://github.com/DaviTostes" target='_blank'>Davi Tostes</a></p>
      </footer>
    </div>
  )
}

export default App