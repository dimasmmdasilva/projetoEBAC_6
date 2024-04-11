// Home/index.tsx
import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export interface Restaurant {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

export interface MenuItem {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Erro ao buscar os dados:', error))
  }, [])

  return (
    <>
      <Header />
      <ProductsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
