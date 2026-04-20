import React from 'react'
import styled from 'styled-components'
import { FaPizzaSlice, FaHamburger, FaPepperHot } from 'react-icons/fa'
import {
  GiNoodles,
  GiChopsticks,
  GiDumpling,
  GiTacos,
  GiOlive,
  GiCroissant,
  GiCookingPot,
} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const cuisines = [
  { name: 'Italian', icon: <FaPizzaSlice /> },
  { name: 'American', icon: <FaHamburger /> },
  { name: 'Thai', icon: <GiNoodles /> },
  { name: 'Japanese', icon: <GiChopsticks /> },
  { name: 'Chinese', icon: <GiDumpling /> },
  { name: 'Indian', icon: <FaPepperHot /> },
  { name: 'Mexican', icon: <GiTacos /> },
  { name: 'Mediterranean', icon: <GiOlive /> },
  { name: 'French', icon: <GiCroissant /> },
  { name: 'Korean', icon: <GiCookingPot /> },
]

function Category() {
  return (
    <List>
      {cuisines.map((c) => (
        <SLink key={c.name} to={`/cuisine/${c.name}`}>
          {c.icon}
          <h4>{c.name}</h4>
        </SLink>
      ))}
    </List>
  )
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 3rem 0rem;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  text-decoration: none;
  background: white;
  width: 7rem;
  height: 5.5rem;
  cursor: pointer;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }

  h4 {
    color: var(--text-dark);
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 0.5rem;
    text-align: center;
  }

  svg {
    color: var(--text-light);
    font-size: 1.6rem;
  }

  &.active {
    background: var(--primary-color);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`

export default Category
