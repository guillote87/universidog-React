import React from 'react'
import './Formacion.css'

export const Formacion = () => {
  return (
    <div className="formacion">
            <div className="container formacion-container">
                <div className="formacion-text">
                    <h2 className="subtitle">Curso de formacion para cachorros</h2>
                    <p className="formacion-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis
                        cupiditate aspernatur praesentium.</p>
                    <a href="#" className="cta">Inscribirme</a>
                </div>
                <figure className="formacion-card">
                    <img src="./images/formacion.jpg" className="formacion-image"/>
                </figure>

            </div>
        </div>
  )
}
