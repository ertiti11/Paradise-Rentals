import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div
      className="bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white text-shadow">
          ¿Listo para su aventura en el paraíso?
        </h2>
        <p className="text-xl mb-8 text-white text-shadow">
          Reserve ya su alquiler y cree recuerdos inolvidables en las aguas
          cristalinas.
        </p>
        <Link
          to="/reservar"
          className="bg-paradise-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-paradise-dark transition duration-300 inline-block"
        >
          Explorar los alquileres
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;

