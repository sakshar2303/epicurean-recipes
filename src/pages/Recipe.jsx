import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Recipe() {
  const params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    fetchDetails()
    checkFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name])

  const checkFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.some(fav => fav.id === params.name))
  }

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      const filtered = favorites.filter(fav => fav.id !== params.name)
      localStorage.setItem('favorites', JSON.stringify(filtered))
    } else {
      favorites.push({ id: params.name, title: details.title, image: details.image })
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    setIsFavorite(!isFavorite)
  }

  const fetchDetails = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await res.json()
    setDetails(data)
  }

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        {details.image && <img src={details.image} alt={details.title} />}
        <FavoriteButton 
          onClick={toggleFavorite}
          className={isFavorite ? 'favorite' : ''}
        >
          {isFavorite ? '❤️ Saved' : '🤍 Save to Favorites'}
        </FavoriteButton>
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary || '' }} />
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions || '' }} />
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {(details.extendedIngredients || []).map((ing, index) => (
              <li key={`${ing.id}-${index}`}>{ing.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin: 5rem 0rem;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  img {
    width: 100%;
    border-radius: 2rem;
    box-shadow: var(--card-shadow);
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.1rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }

  ul {
    margin-top: 2rem;
    list-style-type: none;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
      }
    }
  }

  div h3 {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: var(--text-light);
    margin-top: 2rem;
    font-family: 'Inter', sans-serif;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: var(--text-dark);
  background: white;
  border: 2px solid var(--text-dark);
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  border-radius: 0.8rem;
  transition: all 0.3s ease;

  &.active {
    background: var(--text-dark);
    color: white;
  }

  &:hover {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
  }
`

const Info = styled.div`
  flex: 1;
`

const FavoriteButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #ddd;
  background: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &.favorite {
    background: #fffafa;
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  &:hover {
    background: #fdfdfd;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
`

export default Recipe
