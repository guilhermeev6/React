import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias'])


  // Criando uma variável na qual é passado o nome dela e a função que irá atualizar a função em tempo real atravéz do hook useState que receberá um vetor com os registro dos usuários.
  const[users, setUsers] = useState([
    {id: 1, name: 'Guiguiba', age: 17},
    {id: 2, name: 'João', age: 78},
    {id: 3, name: 'Amauri', age: 45}
  ])

  // Criando a função que irá deletar aleatoriamente os usuários
  const deleteRandom = () => {
    // Pega um número açratório que nprmaçmente pegaria de 0 a 1, porém elemultiplica por 4 e arredonda para ter a certeza que o 3 também sairá
    const randomNumber = Math.floor(Math.random() * 4)

    // Para deletar, é chamado a função própria do useState que vai atualizar automaticamente a mesma.
    //É passado um parâmetro chamado prevUsers dentro do setUsers pois o mesmo recebera todos os dados
    setUsers((prevUsers) => {
      //Retorna uma nova lista filtrando apenas os números diferentes do número sorteado. Ou seja, ele não exibe o objeto em que o id é igual ao número.
      return(prevUsers.filter((user) => randomNumber !== user.id))
    })
  }
  return (
    <>
      <ul>
        {/* Para cada elemento do array, ele mostra esse item. */}
        {list.map((item, identificador) => (
          <li key={identificador}>{item}</li>
        ))}
      </ul>
      <ul>
        {/* 
          Como nos objetos já tem um id, é só referenciar. 
          É passado users para guardar o valor do vetor.
          Para cada elemento dentrode users, é criado um li com nome e idade. Logo, temos uma tabela dinâmica.
        */}
        {users.map((users) => (
          <li key={users.id}>{users.name} - {users.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </>
  )
}

export default ListRender