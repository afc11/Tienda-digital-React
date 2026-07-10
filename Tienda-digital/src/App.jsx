import About from './component/About.jsx'
import Layout from './component/Layout.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router'
import NotFoud from './component/NotFaund.jsx'
import Producto from './pages/Producto.jsx'

function App() {

  return (
    <>
      <Routes />{
      <Route element={<Layout />}>
        <Route element={<Home />} index />

        <Route path="about" element={<About></About>} />
        <Route path="productos/:productId" element={<Producto />} />
        <Route path="*" element={ <NotFoud />} />
      </Route>}
    </>

  )
}

export default App
