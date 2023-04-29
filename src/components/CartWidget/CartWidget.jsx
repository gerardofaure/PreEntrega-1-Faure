import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "carrito.jpg";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        <strong>5</strong>
    </div>
  )
}

export default CartWidget

