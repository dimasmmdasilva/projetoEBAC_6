// Home/index.tsx

import React from 'react'
import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useGetFeaturedMenuQuery } from '../../services/api'

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
  const { data: restaurants = [], error, isLoading } = useGetFeaturedMenuQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) {
    if ('message' in error) {
      return <div>Error: {error.message}</div>
    } else {
      return <div>Error: Unknown error</div>
    }
  }

  return (
    <>
      <Header />
      <ProductsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
