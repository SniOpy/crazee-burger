import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
        <h1>ErrorPage</h1>
        <br/>
        <Link to="/"><button>Revenir à la page d'accueil</button></Link>
      </div>
  )
}
