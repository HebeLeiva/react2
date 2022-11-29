import React from 'react'
import bookhouse from '../components/img/bookhouse.png'
import CartWidget from './CartWidget'
import './NavBar.css'


export const NavBar = () => {
    return (
    <nav>
        <img src={bookhouse} className="logo" alt="logo" />
        <a href='#home'>Inicio</a>
        <a href='#recomendados'>Recomendados</a>
        <a href='#contacto'>Contacto</a>
        <CartWidget />
    </nav>
    )
}
