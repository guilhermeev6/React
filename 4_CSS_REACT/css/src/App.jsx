import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15
  const [name] = useState("SOU EUU")
  const redTitle = true
  return (
    <>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Inline CSS - Não é bom pois, se o elemento se repetir com outra cor, poluirá o código. */}
      <p style={{color: "yellow", padding: "25px", borderTop: "2px solid red"}}>Estilo inline</p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>Sou false</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>Sou true</h2>
      <h2 style={name === "SOU EUU" ? {color: "green", backgroundColor: "black"} : null}>CSS dinâmico</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Classe dinâmica. Sou TRUE</h2>
      <h2 className={redTitle ? "title" : "red-title"}>Sou FALSE</h2>
      {/* CSS Modules (o mais usado pois NÃO VAZA PARA O APP) */}
      <Title />
      <h1 className='my_title'>Testando o module do Title. Será que vaza? Não vazou!</h1>
    </>
  )
}

export default App
