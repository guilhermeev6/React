import './App.css'
import ManageData from './components/ManageData'

//Importando imagens na pasta assets
import City from './assets/city.jpg'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'
function App() {
  const name = "Joaquim"
  const [userName] = useState("Guiguiba")
  return (
    <>
      <h1>Avançando em React</h1>
      {/* 
        Imagem na pasta public
        
        Não foi preciso colocar o caminho todo para a pasta public pois já puxa de lá.
      */}
      <div>
        <img src="img1.jpg" alt="Paisagem" />
      </div>
      {/*
        Imagem na pasta assets
      */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name = {userName} />
      {/* Destructuring props */}
      <CarDetails brand = "VW" Km = {10000} color = "Azul" />
    </>
  )
}

export default App
