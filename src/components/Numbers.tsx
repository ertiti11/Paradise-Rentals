import "./styles.css";
import { Link } from "react-router-dom";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.jpg";
import image7 from "../assets/image-7.png";

export default function Numbers() {
  return (
    <section className="flex flex-col my-20 items-center mt-16 gap-y-10 relative px-16">
      <h2 className="text-5xl uppercase text-center text-pretty flex flex-wrap justify-center items-center gap-x-2 max-w-full">
        Descubre la libertad de navegar
        <img
          className="w-24 h-16 rounded-3xl inline-block align-middle hover:scale-110 hover:rotate-3 transition-all duration-500"
          src={image6}
          alt="Navegación"
        />
        con nuestras embarcaciones de alquiler village ideales
        <img
          className="rounded-3xl w-24 h-16 inline-block align-middle hover:scale-110 hover:rotate-3 transition-all duration-500"
          src={image5}
          alt="Navegación"
        />
        para explorar destinos únicos y vivir experiencias inolvidables en el mar.
      </h2>

      <p className="text-center mx-20 text-xl leading-relaxed poppins">
        En <b className="text-blue-400">Yacht Vacations</b>, nos apasiona
        ofrecerte experiencias inolvidables en el mar. Ya sea que busques
        relajarte en aguas tranquilas, explorar costas ocultas o disfrutar de un
        día de diversión, tenemos la embarcación perfecta para ti. Con nuestra
        flota de barcos modernos y bien mantenidos, podrás disfrutar de la
        libertad de navegar con total seguridad y comodidad.
        <br />
        Nos enorgullece brindarte un servicio personalizado y cercano. Nuestro
        equipo de expertos está aquí para ayudarte a elegir el barco que se
        adapte a tus necesidades, asegurándose de que tu experiencia sea única.
        Además, con nuestra plataforma de reservas online, alquilar un barco
        nunca fue tan fácil y rápido.
      </p>
    </section>
  );
}
