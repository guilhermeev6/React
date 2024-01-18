import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1, Nome: "Mitsubishi Lancer GT", Potencia: "168cv", Km: 1500},
    {id: 1, Nome: "Chevrolet Astra", Potencia: "300cv", Km: 540},
    {id: 1, Nome: "Toyota Supra GR", Potencia: "382cv", Km: 0}
  ]
  return (
    <>
      <h1>Lista de carros à venda</h1>
      {cars.map((car) => (
        <CarDetails key={car.id} name = {car.Nome} potence = {car.Potencia} km = {car.Km}/>
      ))}
    </>
  )
}

export default App
