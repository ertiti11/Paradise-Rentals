import Video from "../assets/Video.mp4";
import "./styles.css";

const Hero = () => {
  return (
    <div className='bg-white/90 h-[calc(100vh-4rem)] mx-10 my-10 rounded-xl mb-40 overflow-hidden'>
      <video
        className='h-full w-full object-cover' // Cambia a 'object-cover' para cubrir el área
        autoPlay
        muted
        loop // Añade loop si quieres que se repita
        src={Video}
      ></video>
    </div>
  );
};

export default Hero;
