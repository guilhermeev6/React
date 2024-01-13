const Challenge = () => {
  const a = 15
  const b = 20
  const somar = () => {
    alert(a + b)
  }
  return (
    <>
      <h2>A: {a}</h2>
      <h2> B: {b}</h2>
      <button onClick={somar}>Calcular</button>
      <button onClick={() => alert(a+b)}>Cal</button>
    </>
  )
}

export default Challenge