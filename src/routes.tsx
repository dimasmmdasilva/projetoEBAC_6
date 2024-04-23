// routes.tsx

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Payment from './components/Payment'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/payment" element={<Payment items={[]} />} />
  </Routes>
)

export default Rotas
