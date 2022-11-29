import React from 'react'
import carrito from '../components/img/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='contenedorCarrito'>
        <img src={carrito} className="carrito"alt='carrito'></img>
        <h3>0</h3>
    </div>
  )
}

export default CartWidget