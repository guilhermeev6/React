// children é a palavra resevada para incluir um texo dentro da declaração do componente.
const Container = ({ children, myValue }) => {
  return (
    <>
      <h2>Este é o título do container</h2>
      {children}
      <p>O valor é: {myValue}</p>
    </>
  )
}

export default Container