"use client"
import { motion } from "framer-motion"

export default function Button({status}) {
    return (
      <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: "360deg" }}
      transition={{
        duration: 0.125,
        ease: "easeInOut"
      }}
      className="bg-slate-600  hover:bg-blue-800 text-white p-3">{status}</motion.button>
    )
  }