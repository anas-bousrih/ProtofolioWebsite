import React from 'react'
import heroBg from '../assets/herobg.png'

const ParallaxBackground = () => {
  return (

    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "saturate(1.05) brightness(0.9) blur(0.4px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050714]/85 via-[#0a0e24]/80 to-[#050714]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(87,219,150,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(202,47,140,0.12),transparent_28%),radial-gradient(circle_at_60%_80%,rgba(51,194,204,0.1),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_35%,rgba(255,255,255,0)_100%)] mix-blend-screen" />
    </div>
    
)
}

export default ParallaxBackground
