"use client"
import { MessageSquareText, Loader2, ArrowRight } from "lucide-react"
import ModelViewer from "./model-viewer"
import { useState, useRef } from "react"
import { Button } from "./ui/button"

export default function AIGenerationSection() {
  // Ejemplo de prompt médico predeterminado
  const prompt = "Generar un modelo de un perro de raza shiba inu kawai"
  const modelViewerRef = useRef<{ handleGenerate: () => void } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const handleGenerateClick = () => {
    // Llamar a la función de generación del ModelViewer
    setIsLoading(true)
    if (modelViewerRef.current) {
      Promise.resolve(modelViewerRef.current.handleGenerate())
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Columna de información - Lado izquierdo */}
          <div className="flex flex-col justify-start mr-24">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Generación de Modelos <span className="text-teal-400">con IA</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nuestra avanzada tecnología de IA transforma descripciones de texto en modelos 3D precisos,
                específicamente optimizados para educación médica, aplicaciones robóticas y más.
              </p>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-400/10 p-3 rounded-lg">
                  <MessageSquareText className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Crea Tu Modelo 3D</h3>
                  <p className="text-gray-400 mb-4">
                    Describe lo que necesitas, y nuestra IA generará un modelo 3D preciso
                    listo para uso educativo o impresión.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-400/10 p-3 rounded-lg">
                  <MessageSquareText className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Peronalización automática</h3>
                  <p className="text-gray-400 mb-4">
                    Ajusta automáticamente los modelos generados para adaptarse a tus necesidades específicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna de demo - Lado derecho */}
          <div className="w-full">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
              <div className="relative z-10 h-full justify-center mb-4">
                <div className="bg-black/50 w-full backdrop-blur-sm p-4 py-2 pr-2 rounded-lg border border-gray-800 ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-300">{prompt}</p>
                    <Button
                      size="sm"
                      className="bg-teal-500 hover:bg-teal-600 text-black ml-2"
                      onClick={handleGenerateClick}
                      disabled={isLoading}
                      title="Generate model"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <ModelViewer prompt={prompt} ref={modelViewerRef} />
              <p className="text-sm text-gray-400 mt-4 italic">
                Visualizando: "{prompt}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

