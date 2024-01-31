import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  //3 - Gerenciamento de dados do input
  const [name, setName] = useState(user ? user.name : '') //6 - Inputs controlados
  const [email, setEmail] = useState(user ? user.email : '') // Preenchendo um usuário que foi passado na prop automaticamente.
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  
  //Esse evento vai puxar todas as informações da ação do input
  const handleName = (event) => {
    // Para cada mudança no input, a variável name vai ser alterada atravéz da função setName.
    setName(event.target.value)
    // Se for apenas para salvar um valor, é melhor fazer inline assim como no email.
  }
  // Para "enviar" os dados  
  const handleSubmit = (e) => {
    // Vai parar o recarregamento da página para melhor experiência do usuário
    e.preventDefault()
    console.log("Enviando o formulário...")
    console.log(name, email, bio, role)
    //7 - Limpar form
    setName('')
    setEmail('')
    setBio('')
  }

  return (
    <>
      {/* criando o formulário */}
      {/*5 - Envio de Formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Nome: </span>
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
          </label>
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail: </span>
          {/* 4 - Simplificação de manipulação de state */}
          <input type="email" name="email" placeholder="Digite seu E-mail" onChange={(event) => setEmail(event.target.value)} value={email} />
        </label>
        {/* 8 - Textarea */}
        <label>
          <span>Bio: </span>
          <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}

export default MyForm