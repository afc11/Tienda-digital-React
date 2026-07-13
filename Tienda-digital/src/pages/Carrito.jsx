import { useCarrito } from "../contexts/CarritoContext";
import "./Carrito.css";

const Carrito = () => {
    const { carrito, popToCarrito } = useCarrito();

    return (
        <div id="Carrito">
            <h2>Carrito</h2>

            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio por unidad</th>
                        <th>Precio total</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                <img
                                    src={producto.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                                {producto.title}
                            </td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.price}</td>
                            <td>{producto.total_price}</td>
                            <td>
                                <button onClick={() => popToCarrito(producto.id)}>
                                    Quitar del carrito
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Carrito;