import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  //3 - Gerenciamento de dados do input
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  //Esse evento vai puxar todas as informações da ação do input
  const handleName = (evento) => {
    // Para cada mudança, a variável name vai ser alterada atravéz da função setName.
    setName(evento.target.value)
  }
  console.log(name)

  return (
    <>
      {/* criando oformulário */}
      <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail: </span>
          <input type="email" name="email" placeholder="Digite seu E-mail" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}

export default MyForm