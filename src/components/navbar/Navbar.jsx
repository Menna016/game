import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
         <section>
        <header>
          <img src='images\wraper.png' className="w-100 object-fit-cover" alt="game photo" />
        </header>
        <div className="container">
          <nav className="navbar  navbar-expand-lg position-sticky rounded-5  z-3">
            <a className="ms-5 navbar-brand" href="#">
              <img src='images\logo-sm.png' alt="Logo" width={70} height={38} className="d-inline-block pe-2" />
              <div className="logo-text d-inline-block ">
                Game Reviews
              </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-end ms-auto me-5 ">
                <li className="nav-item px-2 ">
                  <NavLink to="/" className="nav-link text-white" aria-current="page" >mmorpg</NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="Shooter" className="nav-link text-white " >shooter</NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="Sailing" className="nav-link text-white " >sailing</NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="Permadeath" className="nav-link text-white " >permadeath</NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="Superhero" className="nav-link text-white " >superhero</NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink to="Pixel" className="nav-link text-white " >pixel</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  )
}
