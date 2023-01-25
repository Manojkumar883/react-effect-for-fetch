import { useEffect, useState } from "react"

function UsersSection() {
  const[users , setUser] = useState ([])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
    .then(response => response.json())
    .then((data) => {
      console.log("user data:", data)
      setUser(data.results)
    })
  },[])
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      <ul className="users-list">
      {users.map((user,index)  => ( 
        <li
         className={user.gender === 'female'? "bg-blue" : "bg-pink"}>
        <img src = {user.picture.medium} alt = {user.name} />
        <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
        <p>Email: {user.email}</p>
        </li> 
      ))}
      </ul>
      </div>
    </section>
  )
}

export default UsersSection
