// Perfil.tsx
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import PerfilHeader from '../../components/PerfilHeader'
import PerfilList from '../../components/PerfilProductsList'
import { useParams } from 'react-router-dom'
import { Restaurant } from '../../pages/Home'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    if (!id) return
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((error) => console.error('Erro ao buscar os dados:', error))
  }, [id])

  if (!restaurant) return null

  return (
    <>
      <PerfilHeader />
      <Banner
        capa={restaurant.capa}
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
      />
      <PerfilList restaurant={restaurant} />
      <Footer />
    </>
  )
}

export default Perfil
