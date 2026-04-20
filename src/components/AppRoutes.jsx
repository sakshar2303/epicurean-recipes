import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/Home'
import WorldKitchen from '../pages/WorldKitchen'
import Searched from '../pages/Searched'
import Recipe from '../pages/Recipe'
import Search from './Search'
import Category from './Category'

/**
 * AppRoutes Component
 * Handles the main routing logic for the Epicurean application.
 * Utilizes Framer Motion's AnimatePresence for smooth page transitions.
 * 
 * @returns {JSX.Element} The rendered routes and shared layout components.
 */
function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <Search />
      <Category />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<WorldKitchen />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AppRoutes
