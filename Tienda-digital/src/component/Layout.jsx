import React from 'react'
import { Outlet, Link } from 'react-router'
import '../component/Header.css'

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />

      <Outlet />

      <footer>
        <p>Echa por Alberto Fernandez</p>
      </footer>

    </div>
  )
}

const Header = () => {
  return (
    <header>
      <h1>Tienda Digital</h1>

      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>

        <Link to={"carrito"}>Carrito</Link>
      </nav>
    </header>
  )
}

export default Layout