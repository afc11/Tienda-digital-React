import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext(undefined);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

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

    return (
        <CarritoContext.Provider value={{ carrito, pushToCarrito, popToCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error("useCarrito must be used inside CarritoProvider");
    }
    return context;
};