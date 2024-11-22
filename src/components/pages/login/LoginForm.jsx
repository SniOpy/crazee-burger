import { useState } from 'react'

export default function LoginForm() {
     //! state
     const [firstname, setFirstname] = useState("")
     //! comportements
     const handleSubmit = (event) => { 
         event.preventDefault();
         alert(`Bonjour ${firstname}`)
         setFirstname(" ")
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
        <form action="" onSubmit={handleSubmit}>
            <input 
              type="text" 
              onChange={handleChange}  
              placeholder='Entrer votre nom...'
              required
            />
            <button type='submit' >Accéder à votre espace</button>
        </form>
    </div>
  )
}
