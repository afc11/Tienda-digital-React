import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ProductoProvider } from './contexts/ProductosContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductoProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ProductoProvider>
    </BrowserRouter>
  </StrictMode>,
)
