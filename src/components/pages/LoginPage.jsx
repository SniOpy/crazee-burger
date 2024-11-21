import React, { useState } from 'react'

export default function LoginPage() {

     //! state
    const [firstname, setFirstname] = useState("Bob")
    //! comportements
    const handleSubmit = (event) => { 
        event.preventDefault();
        alert(`Bonjour ${firstname}`)
     }

     const handleChange = (event) => { 
        setFirstname(event.target.value)
      }

    //! render
  return (
    <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>

        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}required placeholder='Entrer votre nom...'/>
            <button type='submit'>Accéder à votre espace</button>
        </form>
    </div>
  )
}
