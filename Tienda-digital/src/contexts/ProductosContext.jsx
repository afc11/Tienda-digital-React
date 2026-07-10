import { createContext, useState, useContext } from 'react'

const ProductoContext = createContext(undefined);

export const ProductoProvider = ({ children }) => {
    const [productos, setProductos] = useState([])

    return (
        <ProductoContext.Provider value={{productos, setProductos}}>
            { children }
        </ProductoContext.Provider>
    )
}

export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (!context)
    throw new Error('useProducto must be used inside ProductoProvider');

  return context;
};