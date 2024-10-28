import { Link } from 'react-router-dom';
import Heroimg from '../assets/Hero.webp';
import "./styles.css";
import SearchIcon from '../assets/SearchIcon';
const Hero = () => {
  return (
    <div className='bg-white/90 h-[calc(100vh-4rem)] mx-10 my-10 rounded-xl mb-40'>
      <video className='rounded-xl h-[calc(100vh-4rem)] w-full ' autoPlay={"True"} muted  src="https://download-video.akamaized.net/v3-1/playback/82fe9c0d-15ec-4823-8940-b152e34dae5c/4f6fc42c-6a4735d7?__token__=st=1729804229~exp=1729818629~acl=%2Fv3-1%2Fplayback%2F82fe9c0d-15ec-4823-8940-b152e34dae5c%2F4f6fc42c-6a4735d7%2A~hmac=d4ab64626a7c4831e15a5166f12e39cc0e480edc11ee74087843cf86372d908a&r=dXMtZWFzdDE%3D"></video>
    </div>
  );
};

export default Hero;
