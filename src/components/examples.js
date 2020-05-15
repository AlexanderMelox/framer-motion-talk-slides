import React from 'react'
import { motion } from 'framer-motion'

export const One = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: 2, rotate: 90 }}
      transition={{ duration: 0.6 }}
    />
  )
}
