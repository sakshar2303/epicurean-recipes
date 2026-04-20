import styled from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import AppRoutes from './components/AppRoutes'

function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Epicurean</Logo>
      </Nav>
      <AppRoutes />
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  color: var(--text-dark);
`

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
  }
`

export default App
