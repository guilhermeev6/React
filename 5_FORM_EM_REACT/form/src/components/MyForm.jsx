import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  //3 - Gerenciamento de dados do input
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  
  //Esse evento vai puxar todas as informações da ação do input
  const handleName = (event) => {
    // Para cada mudança, a variável name vai ser alterada atravéz da função setName.
    setName(event.target.value)
    // Se for apenas para salvar um valor, é melhor fazer inline assim como no email.
  }
  
  const handleSubmit = (e) => {
    // Vai parar o recarregamento da página para melhor experiência do usuário
    e.preventDefault()
    console.log("Enviando o formulário...")
    console.log(name, email)
  }

  return (
    <>
      {/* criando o formulário */}
      {/*5 - Envio de Formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Nome: </span>
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
          </label>
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail: </span>
          {/* 4 - Simplificação de manipulação de state */}
          <input type="email" name="email" placeholder="Digite seu E-mail" onChange={(event) => setEmail(event.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}

export default MyForm