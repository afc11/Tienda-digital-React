import { useState } from "react"
import { useProducto } from "../contexts/ProductosContext"
import { Link } from "react-router"

const Home = () => {
  
  const { productos, setProductos } = useProducto()

  return (
    <div>
      <h1>Home</h1>
        {productos.map((producto) => (
          <div key={producto.id}>
            <Link to={`productos/${producto.id}`}>
              <p>{producto.title}</p>
              <img src={producto.image} alt="" width="200" height="200" />
            </Link>
          </div>
        ))}
      </div>
  )
}

export default Home