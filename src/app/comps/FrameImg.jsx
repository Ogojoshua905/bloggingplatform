"use client";

import { motion, AnimatePresence } from "framer-motion" 

export default function Intro({children}) {
  return (
    <AnimatePresence>
    <motion.div
    
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}>

      {children}
    </motion.div>
    </AnimatePresence>
  )
}
