import About from './component/About.jsx'
import Layout from './component/Layout.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router'
import NotFoud from './component/NotFaund.jsx'
import Producto from './pages/Producto.jsx'
import Carrito from './pages/Carrito.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route element={<Home />} index />

          <Route path="about" element={<About />} />
          <Route path="productos/:productId" element={<Producto />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="producto/:productId" element={<Producto />} />

          <Route path="*" element={<NotFoud />} />
        </Route>
      </Routes>
    </>

  )

}

export default App