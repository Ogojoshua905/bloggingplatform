"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"


export default function Home() {

  return (
    <div>
      
    <motion.div
      style={{ height: '100vh', background: 'black' }}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      whileInView={ {opacity: 1} }
      transition={{duration:1}}>

    </motion.div>
    </div>
  )
}

