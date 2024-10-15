import { MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div id="contact" className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-paradise-dark">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-paradise-dark">Ponte en contacto</h3>
            <p className="mb-6 text-gray-600">¿Tiene alguna pregunta o quiere reservar su aventura en el paraíso? Póngase en contacto con nosotros.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-paradise-blue mr-2" />
                <span>benalmádena,12341</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-paradise-blue mr-2" />
                <span>664334563</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-paradise-blue mr-2" />
                <span>info@paradiserentals.com</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-paradise-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-paradise-dark transition duration-300">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact