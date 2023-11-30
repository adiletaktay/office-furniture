import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'
import { Link, NavLink } from 'react-router-dom'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa +=Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
    <Order onDelete={props.onDelete} key={el.id} item={el} />
  ))}
  <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header>
        <div>
          <Link to="/" className='logo'>
            <span >House staff</span>
          </Link>
            <ul className='nav'>
              <li><NavLink 
                end 
                activestyle={{'color': '#9f0013'}} 
                style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                to="/about">Про нас</NavLink></li>
                <li><NavLink  
                style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})} 
                to="/contacts">Контакты</NavLink></li>
                <li><NavLink  
                style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})} 
                to="/cabinet">Кабинет</NavLink></li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen= !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
              <div className='shop-cart'>
                {props?.orders?.length > 0 ? 
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
      </header>
    </>
  )
}

