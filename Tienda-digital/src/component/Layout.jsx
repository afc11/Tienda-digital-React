import React from 'react'
import { Outlet, Link } from 'react-router'



const Header = () => {
  <header>
    <h1>Tienda Digital</h1>

    <nav>
      <link to={"/"}>Home</link>
      <link to={"abuot"}>Abuot</link>

      <link to={"carrito"}>Carrito</link>
    </nav>
  </header>

}

const Layout = ({ children }) => {
  return (
    <>
      <Outlet />

      <footer>
        <p>Echa por Alberto Fernandez</p>
      </footer>

    </>
  )
}

export default Layout