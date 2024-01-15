// Puxando dentro dos colchetes os nomes referentes aàs props criadas.
const CarDetails = ({brand, Km, color, newCar}) => {
  return (
    <>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca do carro: {brand}</li>
        <li>KM: {Km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo!</p>}
    </>
  )
}

export default CarDetails