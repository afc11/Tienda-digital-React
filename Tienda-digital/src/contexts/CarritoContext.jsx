import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext(undefined);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [historial, setHistorial] = useState([]);

    const pushToCarrito = (producto) => {
        setCarrito((prev) => {
            const index = prev.findIndex((p) => p.id === producto.id);
            if (index === -1) return [...prev, producto];

            return prev.map((p, i) =>
                i === index
                    ? {
                        ...p,
                        cantidad: p.cantidad + producto.cantidad,
                        total_price: p.total_price + producto.total_price,
                    }
                    : p
            );
        });
    };

    const popToCarrito = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id));
    };

    const incrementar = (id) => {
        setCarrito((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (index === -1) return prev;

            return prev.map((item, i) => {
                if (i === index) {
                    const cant = item.cantidad + 1;
                    return {
                        ...item,
                        cantidad: cant,
                        total_price: cant * item.price,
                    }
                } else {
                    return item;
                }
            });
        });
    };

    const decrementar = (id) => {
        setCarrito((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (index === -1) return prev;

            return prev.map((item, i) => {
                if (i === index) {
                    const cant = item.cantidad - 1;

                    if (cant > 0) {
                        return {
                            ...item,
                            cantidad: cant,
                            total_price: cant * item.price,
                        };
                    } else {
                        return item;
                    }
                } else {
                    return item;
                }
            });
        });
    };

    const finalizarCompra = () => {
        if (carrito.length === 0) return;

        const totalAmount = carrito.reduce((sum, item) => sum + item.total_price, 0);

        const nuevaCompra = {
            date: new Date().toISOString(),
            totalAmount: totalAmount
        };

        setHistorial((prev) => [...prev, nuevaCompra]);
        setCarrito([]);

        alert("¡Compra finalizada con éxito!");
    };

    return (
        <CarritoContext.Provider value={{
            carrito,
            pushToCarrito,
            popToCarrito,
            incrementar,
            decrementar,
            historial,
            finalizarCompra
        }}>
            {children}
        </CarritoContext.Provider>
    );
}

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error("useCarrito must be used inside CarritoProvider");
    }
    return context;
};
