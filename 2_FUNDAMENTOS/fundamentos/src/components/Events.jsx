const Events = () => {
  const action = () => {
    alert('Esta função está sendo chamada no botão, porém foi criada antes do HTML.')
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
    </>
  )
}

export default Events