import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import Category from './Category'
import Search from './Search'
import Cuisine from '../pages/Cuisine'
import Searched from '../pages/Searched'
import Recipe from '../pages/Recipe'

function Pages() {
  const location = useLocation();
  return (
    <>
      <Search />
      <Category />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default Pages
