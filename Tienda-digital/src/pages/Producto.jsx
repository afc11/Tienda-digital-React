import { useParams } from "react-router"
import {useProducto} from "../contexts/ProductosContext"

const Producto = () => {
  const { productosID } = useParams()
  const { productos } = useProducto()

const items = productos.find((producto) => producto.id === id)

return (
    <div>
      <h2>{items.title}</h2>
      <img src={items.image} alt="" />
    </div>
  )
}

export default Producto