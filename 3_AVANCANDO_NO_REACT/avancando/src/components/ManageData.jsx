import { useState } from "react"

const ManageData = () => {
  let SomeData = 10
  //Usando um hook chamado useState
  const [number, setNumber] = useState(0)
  //[nome da variável, função criada] = hook importado
  return (
    <>
      <div>
        <p>Valor: {SomeData}</p>
        <button onClick={() => {SomeData = 15}}>Mudar variável</button>
      </div>
      {/* Utilizando o hook */}
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => {setNumber(number + 1)}}>Mudar o state</button>
      </div>
    </>
  )
}

export default ManageData