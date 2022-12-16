import React, { useState } from 'react'
import './About.css'


export const About = () => {

    const slides = [{
        nombre: "Jesica Comas",
        profesion: "Entrenadora Canina",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit nisi sint architecto at!",
        img: "./images/jesica.jpeg"
    }, {
        nombre: "Zoe",
        profesion: "Labradora Chocolate",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit nisi sint architecto at!",
        img: "./images/zoe.jpeg"
    }, {
        nombre: "Nirvana",
        profesion: "Labradora Amarilla",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit nisi sint architecto at!",
        img: "./images/nirvana.jpeg"
    }

    ]

    const [slideActual, setSlideActual] = useState(0)

    const quantity = slides?.length;

    if (!Array.isArray(slides) || quantity === 0) return;

    const nextSlide = () => {
       
        setSlideActual(slideActual === quantity-1 ? 0: slideActual + 1)
    }
    const previousSlide = () => {
        setSlideActual(slideActual === 0 ? quantity -1 : slideActual - 1)
    }


    return (
        <div className='comentarios-container'>
            <img src="./images/left-arrow.svg" className="comentarios-arrow" onClick={previousSlide} />

            {slides.map((slide, index) => {
                return (
<>
                    { slideActual === index && (
                        <div className='comentarios-body'>
                             <div class="comentarios-text">
                            <h2 className="subtitle">Mi Nombre es {slide.nombre}, <br></br><span className="comentarios-course">{slide.profesion}</span></h2>
                            <p className="comentarios-review">{slide.about}</p>
</div>
                            <figure className="comentarios-card">
                                <img src={slide.img} alt="zoe" className="comentarios-image" />
                            </figure>
                        </div>
                    )}
</>
            )


            })}
            <img src="./images/right-arrow.svg" className="comentarios-arrow" onClick={nextSlide} />

        </div>
    )
}