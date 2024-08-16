import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import Order from "./Order"

interface OrderItem {
  id: number
  img: string
  title: string
  price: number
}

const deleteOrder = (id: number): void => {
  const storageOrders = localStorage.getItem("orders")
  const orders: OrderItem[] = JSON.parse(storageOrders || "[]")

  localStorage.setItem("orders", JSON.stringify(orders.filter(el => el.id !== id)))
}

const showOrders = (): JSX.Element => {
  let summa = 0
  const storageOrders = localStorage.getItem("orders")
  const orders: OrderItem[] = JSON.parse(storageOrders || "[]")
  orders.forEach(el => (summa += el.price))

  return (
    <>
      {orders.map(el => (
        <Order onDelete={deleteOrder} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </>
  )
}

const showNothing = (): JSX.Element => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  )
}

export const Header: React.FC = () => {
  const [cartOpen, setCartOpen] = React.useState<boolean>(false)
  const location = useLocation()

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo header__container">
          <span>Office Furniture</span>
        </Link>
        <ul className="nav">
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              Про нас
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={location.pathname === "/contacts" ? "active" : ""}>
              Контакты
            </Link>
          </li>
          <li>
            <Link to="/cabinet" className={location.pathname === "/cabinet" ? "active" : ""}>
              Кабинет
            </Link>
          </li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {localStorage.getItem("orders") && JSON.parse(localStorage.getItem("orders") || "[]").length > 0
              ? showOrders()
              : showNothing()}
          </div>
        )}
      </div>
    </header>
  )
}
