import React from "react";
import App from "../../App.css";
import img from "./Yama.png"
import { Routes, Route, Link } from "react-router-dom";

function Card() {
  return (
    <>

      <div id='cc-content'>
        <h1>Participantes</h1>

        <section className='master'>
          <div className="card-p">
            <Link to="/ficha">
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
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
              <div>
                <div className="card-img">
                  <img src={img} alt="batata" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card-p">
            <Link to="/ficha"><h1>Players</h1>
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