import React from "react";
import App from "../../App.css";
import { Link } from "react-router-dom";
import apres from './apres.css'
function Apres() {

  return (
    <main className="content-todo">
      <div className="englob-estilo">
        <Link to="/SobreRpg">
          <section className="aboutRpg">
            <div>
              <h1>Sobre o Rpg</h1>
            </div>
          </section>
        </Link>
        <Link to="/participantes">
          <section className="participants">

            <div>
              <h1>Participantes</h1>
            </div>

          </section>
        </Link>
      </div>
    </main>
  )
}

export default Apres