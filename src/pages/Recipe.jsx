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
  margin: 5rem 0;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;

  > div:first-of-type {
    flex: 1 1 20rem;
    min-width: 0;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 100%;
    border-radius: 1rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

const Info = styled.div`
  flex: 1 1 30rem;
  min-width: 0;
`

export default Recipe
