import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
    margin: 4rem 0rem;
    
    h3 {
        margin-bottom: 2rem;
        position: relative;
        display: inline-block;
        
        &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--primary-color);
        }
    }
`;

const Card = styled(motion.div)`
    min-height: 25rem;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: var(--card-shadow);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: white;

    &:hover {
        transform: translateY(-10px);
        box-shadow: var(--hover-shadow);
    }

    a {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }

    p {
        position: absolute;
        z-index: 10;
        left: 0;
        bottom: 0;
        padding: 2rem 1rem 1rem 1rem;
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1.1rem;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        min-height: 50%;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.1));
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 0rem;
`;

const ItemCard = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 2rem;
    box-shadow: var(--card-shadow);
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1.5rem;
    font-size: 1.1rem;
    color: var(--text-dark);
  }
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

export { Wrapper, Card, Gradient, Grid, ItemCard };
