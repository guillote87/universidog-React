import React, { useState } from 'react'
import './Navbar.css'


export const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <div className='container'>
      <div className={navbar ? 'navbar active' : 'navbar'}>

        <div className='nav-header'>
          <div className='logo'>
            <img src="./images/logo.png" />
            <h2 className="nav-title">Universidog <br></br><small>#AprendiendoJuntos</small></h2>
          </div>
        </div>
        <div >
          <ul className='nav-menu'>
            <li className='nav-items'> Home </li>
            <li className='nav-items'> Cursos</li>
            <li className='nav-items'> Nosotros</li>
            <li className='nav-items'> Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


