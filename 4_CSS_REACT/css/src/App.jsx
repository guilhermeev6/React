import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 15
  const [name] = useState("SOU EUU")
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
    </>
  )
}

export default App
