import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias'])

  const[users, setUsers] = useState([
    {id: 1, name: 'Guiguiba', age: 17},
    {id: 2, name: 'João', age: 78},
    {id: 3, name: 'Amauri', age: 45}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
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
        {/* Como nos objetos já tem um id, é só referenciar */}
        {users.map((users) => (
          <li key={users.id}>{users.name} - {users.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </>
  )
}

export default ListRender