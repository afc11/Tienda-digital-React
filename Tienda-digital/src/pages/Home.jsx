import { useState } from "react"
import { useProducto } from "../contexts/ProductosContext"
import { Link } from "react-router"
import '../pages/Home.css'

const Home = () => {
  const { productos } = useProducto()

  return (
    <div id="home">
      <h2>Home</h2>

      <div className="content">
        {productos.map((producto) => (

          <div key={producto.id} className="producto">

            <Link to={`/producto/${producto.id}`} className="producto_contenido">

              <img
                src={producto.image}
                alt={producto.title}
              />

              <h3>{producto.title}</h3>

              <p className="producto__precio">${producto.price}</p>

            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home