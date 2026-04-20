import React from 'react'
import {Wrapper, Card, Gradient} from '../utils/utils';
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');
        if (check && check !== 'undefined') {
            try {
                const parsed = JSON.parse(check);
                if (Array.isArray(parsed)) {
                    setVeggie(parsed);
                    return;
                }
            } catch (e) {
                localStorage.removeItem('veggie');
            }
        }
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=vegetarian`);
        const data = await api.json();
        const recipes = Array.isArray(data.recipes) ? data.recipes : [];
        setVeggie(recipes);
        localStorage.setItem('veggie', JSON.stringify(recipes));
    }


  return (
    <>
                <Wrapper>
                    <h3>Our Vegetarian Picks</h3>
                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}>
                        {veggie.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={'/recipe/' + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <Gradient />
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            )
                        }) }
                    </Splide>
                </Wrapper>
        
        
    </>
  )
}

export default Veggie