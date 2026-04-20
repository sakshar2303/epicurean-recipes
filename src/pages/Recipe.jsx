import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Recipe() {
  const params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  useEffect(() => {
    fetchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name])

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
            {(details.extendedIngredients || []).map((ing) => (
              <li key={ing.id}>{ing.original}</li>
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

export default Recipe
