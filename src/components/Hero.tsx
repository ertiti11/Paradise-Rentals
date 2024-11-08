import Video from "../assets/Video.mp4";
import "./styles.css";
import Search from "./SearchComponent/Search";
const Hero = () => {
  return (
    <div className='relative bg-white/90 h-[calc(100vh-4rem)] mx-10 my-10 rounded-xl mb-40 overflow-hidden'>
      <video
        className='absolute top-0 left-0 h-full w-full object-cover'
        autoPlay
        muted
        loop
        src={Video}
      ></video>
      <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex flex-col items-center justify-center'>
        <h1 className='text-white text-4xl'>Luxury Yachts</h1>
        <Search />
      </div>
    </div>
  );
};

export default Hero;