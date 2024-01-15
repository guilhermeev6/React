//O primeiro argumento herda todas as props passadas na referência em App.jsx.

const ShowUserName = (props) => {
  return (
    <>
      <h2>O nome do usuário: {props.name}</h2>
    </>
  )
}

export default ShowUserName