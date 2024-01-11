const Events = () => {
  const action = () => {
    alert('Esta função está sendo chamada no botão, porém foi criada antes do HTML.')
  }

  const renderSomething = (x) => {
    if(x){
      return <h1>Essa função foi criada com html dentro - true</h1>
    } else{
      return <h1>E está sendo chamada ao renderizar a página - false</h1>
    }
  }

  return(
    <>
      <div>
        <button onClick={action}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => alert('Esta função está sendo criada no momento em que você clicou! (inline).')}>Clique aqui também!</button>
        <button onClick={() => {
          if(true){
            alert('Agora com {}, eu posso usar tudo em js mas não é muito usado.')
          }
        }}>De novo aderbal.</button>
      </div>
      {renderSomething(true)}{/*Colocando o valor do x e carregando automáticamente a função.*/}
      {renderSomething(false)}
    </>
  )
}

export default Events