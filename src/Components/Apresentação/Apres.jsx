import React from "react";
import App from "../../App.css";
import { Link } from "react-router-dom";
function Apres() {

  return (
    <>
    
      <main className="content-todo">
        <div className="content-apr">
          <h1>Apresentação</h1>
         <Link to="/participantes" >Participantes</Link>
        </div>
        <section className="content-inser">
          <p>conteudo</p>
        </section>
      </main>
    </>
  )
}

export default Apres