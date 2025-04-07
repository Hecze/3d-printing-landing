"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

// Convert GLB path to GIF path
function getGifPath(glbPath: string): string {
  return glbPath.replace('.glb', '.gif')
}

// Main StaticModelViewer component that now displays GIFs
export default function StaticModelViewer({ 
  modelPath = "/models/robotic_bear.gif",
  scale = 1.5,
}: { 
  modelPath?: string,
  scale?: number,
}) {
  const gifPath = getGifPath(modelPath)
  const [dimensions, setDimensions] = useState({ width: 300, height: 200 })
  
  // Apply scale to the container size
  useEffect(() => {
    setDimensions({
      width: 300 * scale,
      height: 200 * scale
    })
  }, [scale])

  return (
    <div className="aspect-video bg-transparent rounded-lg overflow-hidden relative flex items-center justify-center">
      <div className="relative bg-slate-950 w-full h-full"  style={{
        width: dimensions.width,
        height: dimensions.height,
        maxWidth: '100%',
      }}>
        <Image
          src={gifPath}
          alt="3D Model Animation"
          fill
          style={{ objectFit: 'contain' }}
          className="mx-auto "
          priority
        />
      </div>
    </div>
  )
}
