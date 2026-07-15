import { useCarrito } from "../contexts/CarritoContext";
import "./Historial.css";

const Historial = () => {
    const { historial } = useCarrito();

    return (
        <div id="Historial">
            <h2>Historial de compras</h2>

            <div className="historial-compras">
                {historial && historial.map((compra, i) => (
                    <div className="compra-card" key={i}>
                        <div className="compra-header">
                            <div>
                                <h2>Compra #{i + 1}</h2>
                                <p>{new Date(compra.date).toLocaleDateString()}</p>
                            </div>
                            <div className="compra-total">
                                ${compra.totalAmount.toFixed(2)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Historial;