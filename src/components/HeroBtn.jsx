import React from 'react'
import { motion } from "motion/react";

const HeroBtn = ({ onPrimaryCta }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <motion.button
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onPrimaryCta}
        className="px-6 py-3 text-base font-semibold text-black rounded-full bg-gradient-to-r from-[#33c2cc] via-[#57db96] to-[#d6ff7f] shadow-lg shadow-emerald-500/30"
      >
        View my work
      </motion.button>
      <a
        href="https://github.com/anas-bousrih"
        className="text-sm font-semibold text-neutral-200 underline underline-offset-4 decoration-white/40 hover:decoration-white"
      >
        GitHub
      </a>
    </div>
  )
}

export default HeroBtn
