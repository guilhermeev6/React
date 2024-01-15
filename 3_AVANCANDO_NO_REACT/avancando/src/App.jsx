import './App.css'
import ManageData from './components/ManageData'

//Importando imagens na pasta assets
import City from './assets/city.jpg'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
function App() {
  const name = "Joaquim"
  const [userName] = useState("Guiguiba")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, Km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, Km: 1455},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, Km: 5412}
  ]
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
      <CarDetails brand = "VW" Km = {10000} color = "Azul" newCar = {false}/>
      {/* Reaproveitando */}
      <CarDetails brand = "Ford" Km = {0} color = "Vermelho" newCar = {true}/>
      <CarDetails brand = "Fiat" Km = {4500} color = "Branco" newCar = {false}/>
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails brand={car.brand} Km={car.Km} color={car.color} newCar={car.newCar} />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste" />
      {/* children prop */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="4545">
        <p>E este é o conteúdo dinâmico</p>
      </Container>

    </>
  )
}

export default App
