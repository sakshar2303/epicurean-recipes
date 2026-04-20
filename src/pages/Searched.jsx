import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Grid, ItemCard } from '../utils/utils'

function Searched() {
  const [searched, setSearched] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    getSearched(params.search)
  }, [params.search])

  const getSearched = async (name) => {
    setLoading(true)
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${encodeURIComponent(name)}&number=12`
    )
    const data = await api.json()
    setSearched(Array.isArray(data.results) ? data.results : [])
    setLoading(false)
  }

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!loading && searched.length === 0 && (
        <p>No recipes found for "{params.search}".</p>
      )}
      {searched.map((item) => (
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

export default Searched
