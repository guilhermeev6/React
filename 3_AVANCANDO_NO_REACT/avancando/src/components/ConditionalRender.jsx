import { useState } from "react"

function ConditionalRender() {
  const[x] = useState(true)

  const[name,setName] = useState("João")

  return (
    <>
      <h1>Isso será exibido?</h1>
      {/*
        if(x){
          ...
        }
      */}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, também</p>}
      <h1>If ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clique aqui para inserir o nome João</button>
    </>
  )
}

export default ConditionalRender