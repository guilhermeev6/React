// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordsList } from './data/words.js'

// Components
import StartScreen from './components/StartScreen'
import GameOver from './components/GameOver.jsx'
import Game from './components/Game.jsx'


const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  // O .name é o valorr dentro do objeto stage, logo, o useState estará com o valor 'useState("start")' pois o vetor está puxando o objeto 0 e sua propriedade name.
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [picketCategory, setPicketCategory] = useState('')
  const [letters, setLetters] = useState([])

  const startGame = () =>{
    setGameStage(stages[1].name)
  }
  
  // Process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)    
  }

  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  )
}

export default App
