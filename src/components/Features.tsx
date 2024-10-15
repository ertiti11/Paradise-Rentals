import { Anchor, Shield, Sun } from 'lucide-react'

const Features = () => {
  return (
    <div className="bg-white py-16" id="about">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-paradise-dark">¿Porqué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 bg-gradient-to-br from-paradise-blue to-paradise-dark text-white">
            <Anchor size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Amplia selección</h3>
            <p>Elija entre una gran variedad de kayaks, tablas de paddle surf y mucho más para adaptarse a su aventura.</p>
          </div>
          <div className="text-center p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 bg-gradient-to-br from-paradise-blue to-paradise-dark text-white">
            <Shield size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">La seguridad, lo primero</h3>
            <p>Todo nuestro equipo se mantiene con regularidad e incluye el equipo de seguridad necesario.</p>
          </div>
          <div className="text-center p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 bg-gradient-to-br from-paradise-blue to-paradise-dark text-white">
            <Sun size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Perfecto para cualquier dia</h3>
            <p>Ya sea un día soleado o una tarde nublada, nuestros alquileres son perfectos para cualquier tiempo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features