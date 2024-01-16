const UserDetails = ({name, age, job}) => {
  return (
    <>
      <h1>Informações</h1>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {job}</li>
        {age >= 18 ? (
          <p>Este usuário PODE tirar a carteira de motorista!</p>
        ) : (
          <p>Este usuário NÃO pode tirar a carteira de motorista!</p>
          )}
      </ul>
    </>
  )
}

export default UserDetails