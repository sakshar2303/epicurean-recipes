import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

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
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 2rem 0rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Searched
