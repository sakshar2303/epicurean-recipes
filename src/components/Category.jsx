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
  gap: 1rem;
  margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.85);
  }

  h4 {
    color: white;
    font-size: 0.75rem;
    margin-top: 0.25rem;
    text-align: center;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`

export default Category
