import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function LoginForm() {
     //! state
     const [firstname, setFirstname] = useState("")
     //! comportements
     const handleSubmit = (event) => { 
         event.preventDefault();
         alert(`Bonjour ${firstname}`)
         setFirstname("")
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
            <input 
              type="text" 
              onChange={handleChange}  
              placeholder='Entrer votre nom...'
              required
            />
            <Link to="/order"><button type='submit'>Accéder à votre espace</button></Link>

        </form>
    </div>
  )
}
