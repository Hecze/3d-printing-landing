"use client"

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import type * as THREE from "three"

// Model configuration with keywords and display settings
const MODEL_MAPPINGS = [
  { 
    keywords: ["perro"], 
    path: "/models/shiba.glb",
    scale: 2,
    position: [0, 0.5, 0],
    cameraPosition: [0, 0, 5]
  },
]

// Model component that loads and displays a 3D model
function Model({ modelPath, modelConfig }: { modelPath: string, modelConfig: any }) {
  const { scene } = useGLTF(modelPath)
  const modelRef = useRef<THREE.Group>(null)

  // Rotate the model slightly on load
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })

  // Center the camera on the model
  const { camera } = useThree()

  useEffect(() => {
    if (modelRef.current) {
      camera.position.set(
        modelConfig.cameraPosition[0],
        modelConfig.cameraPosition[1],
        modelConfig.cameraPosition[2]
      )
      camera.lookAt(modelRef.current.position)
    }
  }, [camera, modelConfig])

  return <primitive 
    ref={modelRef} 
    object={scene} 
    scale={modelConfig.scale} 
    position={modelConfig.position} 
  />
}

// Main ModelViewer component
const ModelViewer = forwardRef(({ prompt }: { prompt: string }, ref) => {
  const [isLoading, setIsLoading] = useState(false)
  const [modelGenerated, setModelGenerated] = useState(false)
  const [modelPath, setModelPath] = useState("")
  const [modelConfig, setModelConfig] = useState(MODEL_MAPPINGS[0])

  // Function to handle the generate button click
  const handleGenerate = () => {
    setIsLoading(true)

    // Simulate AI generation with a timeout
    setTimeout(() => {
      // Find the best matching model based on the prompt content
      const promptLower = prompt.toLowerCase()
      
      // Find the model with the most keyword matches
      let bestMatch = MODEL_MAPPINGS[0]
      let maxMatches = 0
      
      MODEL_MAPPINGS.forEach(model => {
        const matches = model.keywords.filter(keyword => promptLower.includes(keyword)).length
        if (matches > maxMatches) {
          maxMatches = matches
          bestMatch = model
        }
      })
      
      // Use the best match or default to the first model
      setModelConfig(bestMatch)
      setModelPath(bestMatch.path)
      setModelGenerated(true)
      setIsLoading(false)
    }, 3000)
  }

  // Expose functions to parent component
  useImperativeHandle(ref, () => ({
    handleGenerate
  }))


  return (
    <div className="w-full h-full flex flex-col">
      {!modelGenerated ? (
        <div className="aspect-video bg-black/30 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full bg-indigo-500/5 blur-xl"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center p-6">
                {isLoading && (
                 <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 max-w-xs w-full">
                  <div className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span className="text-sm text-gray-300">Generando modelo...</span>
                  </div>
                  </div>

                )}
              </div>
        </div>
      ) : (
        <div className="aspect-video bg-black/30 rounded-lg overflow-hidden relative">
          <Canvas shadows className="w-full h-full">
            <PerspectiveCamera makeDefault position={modelConfig.cameraPosition} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Model modelPath={modelPath} modelConfig={modelConfig} />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Environment preset="city" />
          </Canvas>

        </div>
      )}
    </div>
  )
})

ModelViewer.displayName = "ModelViewer"
export default ModelViewer

