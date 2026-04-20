import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    const q = input.trim()
    if (!q) return
    navigate(`/searched/${encodeURIComponent(q)}`)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search a recipe..."
        />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 2rem auto;
  max-width: 50rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: 2px solid transparent;
    background: white;
    font-size: 1.2rem;
    color: var(--text-dark);
    padding: 1rem 3.5rem;
    border-radius: 2rem;
    outline: none;
    width: 100%;
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;

    &:focus {
      border-color: var(--primary-color);
      box-shadow: var(--hover-shadow);
    }
    
    &::placeholder {
      color: #b2bec3;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translate(0, -50%);
    color: var(--primary-color);
    font-size: 1.2rem;
  }
`

export default Search
