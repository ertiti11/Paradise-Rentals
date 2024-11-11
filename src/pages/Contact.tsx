import { MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div id="contact" className="bg-black/80 py-16">
      <div className="container mx-auto my-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-paradise-dark">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-paradise-dark">Ponte en contacto</h3>
            <p className="mb-6 text-gray-200">¿Tiene alguna pregunta o quiere reservar su aventura en el paraíso? Póngase en contacto con nosotros.</p>
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
          <form method='POST' action="https://formsubmit.co/agm0093@alu.medac.es" className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" name='name'/>
            <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" name='email'/>
            <textarea placeholder="Your Message" rows={4} className="w-full p-2 border border-gray-300 rounded" name='comments'></textarea>
            <button type="submit" className="bg-paradise-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-paradise-dark transition duration-300">
              Enviar mensaje
            </button>
            <input type="hidden" name="_next" value="http://localhost:5173/contactos"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact