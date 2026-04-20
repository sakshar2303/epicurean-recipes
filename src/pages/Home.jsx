import React from 'react'
import { motion } from 'framer-motion'
import TrendingFlavors from './TrendingFlavors'
import GreenGourmet from './GreenGourmet'

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GreenGourmet />
      <TrendingFlavors />
    </motion.div>
  )
}

export default Home
