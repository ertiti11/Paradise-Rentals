import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Mensaje enviado con éxito');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        toast.error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el mensaje');
    }
  };

  return (
    <div id="contact" className=" py-16 mt-32">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Su nombre"
              className="w-full p-2 border border-gray-300 rounded text-black"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Su teléfono"
              className="w-full p-2 border border-gray-300 rounded text-black"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Su email"
              className="w-full p-2 border border-gray-300 rounded text-black"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Tu mensaje"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded text-black"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="bg-paradise-blue font-roboto text-white px-6 py-3 rounded-full font-semibold hover:bg-paradise-dark transition duration-300">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;