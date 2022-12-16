import React from 'react'
import './Info.css'

export const Info = () => {
    return (
        <div className='container'>
            <div className='info-wrap'>
            <h2 className="subtitle">¿Que aprenderas con nosotros?</h2>
            <p className="info-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, aliquid? Quod
                porro quas fugiat cum amet nihil necessitatibus ipsa, nemo assumenda quam maiores quae perspiciatis
                sapiente similique et aperiam repudiandae?</p>

            <div className="info">
                <article className="info-card">
                    <img src="./images/convivencia.svg" className="info-icon"/>
                        <h3 className="info-title">Convivencia</h3>
                        <p className="info-paragraph">Aprende a convivir cubriendo las necesidades de tu mascota</p>
                </article>
                <article className="info-card">
                    <img src="./images/juegos.svg" className="info-icon"/>
                        <h3 className="info-title">Diversion</h3>
                        <p className="info-paragraph">Aprende a convivir cubriendo las necesidades de tu mascota</p>
                </article>
                <article className="info-card">
                    <img src="./images/enriquecimiento.svg" className="info-icon"/>
                        <h3 className="info-title">Enriquecimiento Ambiental</h3>
                        <p className="info-paragraph">Aprende a convivir cubriendo las necesidades de tu mascota</p>
                </article>
            </div>
            </div>
        </div>
    )
}
