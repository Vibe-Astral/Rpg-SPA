import React from "react";
import App from "../../App.css";
import img from "./Yama.png"
import { Link } from "react-router-dom";

function Card() {
  return (
    <>

      <div id='cc-content'>
        <h1>Participantes</h1>
        <section className='master'>
          <div className="card-p">
            <Link to="/ficha-master"  >
              <div>
                <h1>Master</h1>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className='card-content'>
          <div className="card-p">
            <Link to="/ficha-1"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-2"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-3"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-4"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-5"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-6"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-7"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-8"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-9"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-10"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha-11"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
        </section>

      </div>


    </>
  )
}

export default Card