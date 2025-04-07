import { Button } from "@/components/ui/button"
import { Printer, Brain, Microscope, Cog, ChevronRight, Menu, Cpu, Beaker, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AIGenerationSection from "@/components/ai-generation-section"
import StaticModelViewer from "@/components/static-model-viewer"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#050a14] text-white">
      {/* Navbar */}
      <header className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="h-6 w-6 text-teal-400" />
            <span className="text-xl font-bold">NEUROPRINT</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-teal-400 transition-colors">
              Inicio
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Servicios
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Galería
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Contacto
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
              Iniciar sesión
            </Button>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Impresión <span className="text-teal-400">3D con IA</span> para Innovación Médica y Robótica
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-xl">
            Transforma conceptos complejos de medicina y robótica en modelos 3D precisos con nuestra avanzada tecnología de generación por IA.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-teal-500 hover:bg-teal-600 text-black font-medium px-6 py-6 rounded-md text-lg">
          Comenzar a Crear
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 px-6 py-6 rounded-md text-lg">
          Ver Galería
            </Button>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative w-full h-[400px] md:h-[500px]">
            {/* This would be replaced with an actual original image */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Brain className="w-32 h-32 text-teal-400/80" />
            </div>
          </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* AI Feature Section */}
      <AIGenerationSection />

            {/* Applications Section */}
            <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-teal-400">Aplicaciones</span> y Casos de Uso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-400/10 p-3 rounded-lg">
                  <Cpu className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Robótica e Ingeniería</h3>
                  <p className="text-gray-400">
                    Componentes robóticos detallados y modelos de ingeniería para fines educativos o de prototipado.
                  </p>
                </div>
              </div>
              <StaticModelViewer 
                modelPath="/models/robotic_bear.gif"
                scale={2}

              />
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-400/10 p-3 rounded-lg">
                  <Beaker className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Modelos Geológicos</h3>
                  <p className="text-gray-400">
                    Representaciones 3D precisas de formaciones geológicas, minerales y estructuras para la educación en ciencias de la tierra.
                  </p>
                </div>
              </div>
              <StaticModelViewer 
                modelPath="/models/mamut_skull.gif"
                scale={2}
              />
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-400/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Prototipado Rápido</h3>
                  <p className="text-gray-400">
                    Transforma ideas de productos en modelos 3D detallados para ciclos de desarrollo más rápidos y fabricación eficiente.
                  </p>
                </div>
              </div>
              <StaticModelViewer 
                modelPath="/models/architecture.gif"
                scale={2}
              />
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-400/10 p-3 rounded-lg">
                  <Microscope className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Educación Médica</h3>
                  <p className="text-gray-400">
                    Modelos anatómicamente precisos para formación médica, educación de pacientes y planificación quirúrgica.
                  </p>
                </div>
              </div>
              <StaticModelViewer 
                modelPath="/models/leg_prosthesis.gif"
                scale={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-[#050a14] to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nuestros <span className="text-teal-400">Servicios</span>
          </h2>
          
          {/* Categorías de impresión */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Microscope className="h-6 w-6 text-teal-400" />}
              title="Modelos Anatómicos"
              description="Estructuras anatómicas detalladas para educación médica, entrenamiento quirúrgico y estudios de casos clínicos."
            />
            
            <ServiceCard 
              icon={<Cog className="h-6 w-6 text-teal-400" />}
              title="Componentes para Robótica"
              description="Piezas personalizadas para proyectos de robótica, mecatrónica y sistemas de automatización."
            />
            
            <ServiceCard 
              icon={<Zap className="h-6 w-6 text-teal-400" />}
              title="Prototipos de Ingeniería"
              description="Modelos funcionales para probar conceptos, verificar diseños y validar funcionalidades antes de la producción."
            />
            
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              }
              title="Arquitectura en Miniatura"
              description="Maquetas arquitectónicas y modelos urbanos para estudiantes de arquitectura, presentaciones y planificación."
            />
            
            <ServiceCard 
              icon={<Brain className="h-6 w-6 text-teal-400" />}
              title="Ayudas Visuales Educativas"
              description="Modelos de moléculas, estructuras matemáticas y otras herramientas visuales para mejorar el aprendizaje."
            />
            
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                  <path d="M22 12v3a2 2 0 0 1-2 2h-2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="M22 12h-4a2 2 0 0 1-2-2V7"></path>
                  <path d="M18 22l-2-2M18 18l-2 2"></path>
                </svg>
              }
              title="Prótesis y Órtesis"
              description="Soluciones personalizadas de bajo costo para necesidades médicas específicas y rehabilitación."
            />
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para dar vida a tus <span className="text-teal-400">innovaciones</span> médicas y robóticas?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Comienza a usar nuestros servicios de impresión 3D con IA hoy mismo y transforma tus conceptos en realidad tangible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 text-black font-medium px-8 py-6 rounded-md text-lg">
              Comenzar
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 px-8 py-6 rounded-md text-lg">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#050a14]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Preguntas <span className="text-teal-400">Frecuentes</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-gray-800">
                <AccordionTrigger className="text-lg font-medium hover:text-teal-400">
                  ¿Cómo funciona la generación de modelos con IA?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Nuestro sistema de IA utiliza algoritmos avanzados de aprendizaje profundo entrenados con miles de modelos médicos y robóticos. 
                  Puedes ingresar descripciones de texto o cargar imágenes de referencia, y la IA generará un modelo 3D detallado optimizado para 
                  impresión. El sistema ha sido específicamente entrenado para comprender terminología médica y estructuras anatómicas, así como 
                  componentes y mecanismos robóticos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-gray-800">
                <AccordionTrigger className="text-lg font-medium hover:text-teal-400">
                  ¿Qué materiales ofrecen para modelos médicos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Ofrecemos una variedad de materiales biocompatibles y esterilizables adecuados para aplicaciones médicas,
                  incluyendo resinas de grado médico, TPU flexible para modelos de tejidos blandos, y PLA y PETG rígidos para
                  modelos estructurales. Todos nuestros materiales son cuidadosamente seleccionados para cumplir con los requisitos
                  específicos de la educación médica y la planificación quirúrgica.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-gray-800">
                <AccordionTrigger className="text-lg font-medium hover:text-teal-400">
                  ¿Qué tan precisos son los modelos anatómicos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Nuestros modelos anatómicos se crean con alta precisión y exactitud. Cuando se generan a partir de imágenes médicas
                  (TC, RM), mantienen una precisión submilimétrica. Para los modelos generados a partir de descripciones de texto, 
                  nuestra IA ha sido entrenada con bases de datos anatómicas para garantizar la precisión médica. Todos los modelos 
                  pasan por un proceso de revisión por nuestro equipo, que incluye profesionales médicos, para garantizar la corrección anatómica.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-gray-800">
                <AccordionTrigger className="text-lg font-medium hover:text-teal-400">
                  ¿Qué formatos de archivo aceptan y proporcionan?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Aceptamos archivos STL, OBJ, 3MF, STEP y DICOM. Para aplicaciones médicas, podemos trabajar directamente con
                  datos DICOM de TC y RM. Nuestros modelos generados por IA se proporcionan en formato STL por defecto, pero
                  podemos convertirlos a otros formatos a petición. Todos los modelos están optimizados para impresión 3D con
                  grosores de pared apropiados y estructuras de soporte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-gray-800">
                <AccordionTrigger className="text-lg font-medium hover:text-teal-400">
                  ¿Cuánto tiempo tarda en imprimirse un modelo médico o robótico?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  El tiempo de impresión varía según el tamaño, la complejidad y el material del modelo. Las estructuras anatómicas
                  pequeñas normalmente tardan entre 4 y 8 horas, mientras que los modelos más grandes o detallados pueden tardar entre 12 y 24 horas.
                  Los componentes robóticos generalmente tardan entre 6 y 12 horas dependiendo de los requisitos de precisión. Ofrecemos
                  servicios acelerados para casos urgentes, particularmente para modelos de planificación quirúrgica.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Printer className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold">NEUROPRINT</span>
              </div>
              <p className="text-gray-400">
                Transformando la educación médica y la innovación robótica con tecnología de impresión 3D potenciada por IA.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Servicios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Galería
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Generación de Modelos con IA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Modelos Médicos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Componentes Robóticos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" /> Soluciones Personalizadas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Calle Innovación 123, Ciudad Tecnológica</li>
                <li>info@neuroprint.com</li>
                <li>+1 (555) 987-6543</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} NEUROPRINT. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

