import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Grid, ItemCard } from '../utils/utils'

function WorldKitchen() {
  const [cuisine, setCuisine] = useState([])
  const params = useParams()

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${encodeURIComponent(name)}&number=12`
    )
    const data = await api.json()
    setCuisine(Array.isArray(data.results) ? data.results : [])
  }

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => (
        <ItemCard key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </ItemCard>
      ))}
    </Grid>
  )
}

export default WorldKitchen
