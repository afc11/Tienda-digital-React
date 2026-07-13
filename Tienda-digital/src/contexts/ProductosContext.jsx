import { createContext, useState, useContext, useEffect } from 'react'
import getProductos from '../bin/getProductos'

const ProductoContext = createContext(undefined);

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    async function getProds() {
      setProductos(await getProductos())
    }
    getProds()
  }, [])

  return (
    <ProductoContext.Provider value={{ productos, setProductos }}>
      {children}
    </ProductoContext.Provider>
  )
}

export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (!context)
    throw new Error('useProducto must be used inside ProductoProvider');

  return context;
};