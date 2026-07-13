import { useState } from "react"
import { useParams } from "react-router"
import { useProducto } from "../contexts/ProductosContext"
import { useCarrito } from "../contexts/CarritoContext"
import './Producto.css'

const Producto = () => {
  const { productId } = useParams()
  const { productos } = useProducto()
  const { pushToCarrito } = useCarrito();
  const [cantidad, setCantidad] = useState(1)

  const item = productos.find((producto) => producto.id === Number(productId))
  console.log(item);

  const agregarAlCarrito = (e) => {
    e.preventDefault();

    pushToCarrito({
      ...item,
      cantidad,
      total_price: item.price * cantidad,
    });
    alert("Comprando " + cantidad + " " + item.title);
  };

  if (!item) return <p>El producto {productId} no se encontró</p>;

  return (
    <div id="Producto">
      <section className="producto">
        <img src={item.image} alt={item.title} />
        <div className="producto-__descripcion">
          <h2>{item.title}</h2>

          <p className="producto__descripcion">{item.description}</p>

          <p className="producto__precio">Precio: ${item.price}</p>

          <form onSubmit={agregarAlCarrito}>
            <label htmlFor="cantidad">Cantidad: </label>
            <input type="number"
              name="cantidad"
              id="cantidad"
              min={1}
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value) || 1)} />
            <button type="submit">Agregar al carrito</button>
            <button type="button">Comprar ahora</button>

          </form>

          {item.rating && (
            <div className="producto__rating">
              <h3>Valoracion</h3>

              <p>{item.rating.rate}/5</p>
              <p>{item.rating.count} opiniones </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Producto