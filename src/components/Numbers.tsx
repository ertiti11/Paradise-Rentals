import "./styles.css";
import { Link } from 'react-router-dom';
import image5 from '../assets/image-5.png';
import image6 from '../assets/image-6.jpg';
import image7 from '../assets/image-7.png';



export default function Numbers() {
    return (
        <section className="flex flex-col h-screen items-center mt-16 gap-y-10 relative">
        <h2 className="text-5xl uppercase text-center text-balance flex flex-wrap justify-center items-center gap-x-2">
            Descubre la libertad de navegar 
            <img className="px-4 rounded-md w-48 h-32" src={image6} alt="Navegación" />
            con nuestras embarcaciones<img className="px-4 rounded w-48 h-32" src={image5} alt="Navegación" /> de alquiler village
            ideales para explorar destinos únicos <img className="px-4 rounded w-48 h-32" src={image7} alt="Navegación" />y vivir experiencias inolvidables en el mar."
        </h2>
    
        <p className="text-center mx-20 text-lg leading-relaxed">
        En <b className="text-blue-400">Yacht Vacations</b>, nos apasiona ofrecerte experiencias inolvidables en el mar. Ya sea que busques relajarte en aguas tranquilas, explorar costas ocultas o disfrutar de un día de diversión, tenemos la embarcación perfecta para ti. Con nuestra flota de barcos modernos y bien mantenidos, podrás disfrutar de la libertad de navegar con total seguridad y comodidad. 
    <br />
    Nos enorgullece brindarte un servicio personalizado y cercano. Nuestro equipo de expertos está aquí para ayudarte a elegir el barco que se adapte a tus necesidades, asegurándose de que tu experiencia sea única. Además, con nuestra plataforma de reservas online, alquilar un barco nunca fue tan fácil y rápido.
</p>
        
        <Link to="./Alquileres/reservas" className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
            Alquileres
        </Link>
    </section>
    
    );
}
