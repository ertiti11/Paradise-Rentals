import { FC, useEffect, useState } from 'react';
import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import image4 from '../assets/image-4.png';
import image from '../assets/image.png';

const images = [
    image1,
    image2,
    image3,
    image4,
    image
];

const FIXED_HEIGHT = 300;
const IMAGE_GAP = 24;

const ImageSlider: FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageDimensions, setImageDimensions] = useState<Record<string, { width: number; height: number }>>({});
  const tripleImages = [...images, ...images, ...images];

  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
        setImageDimensions(prev => ({
          ...prev,
          [src]: {
            width: img.naturalWidth,
            height: img.naturalHeight
          }
        }));
      };
      img.src = src;
    });
  }, []);

  const getImageWidth = (src: string) => {
    const dimensions = imageDimensions[src];
    if (!dimensions) return FIXED_HEIGHT * 1.5;
    
    const aspectRatio = dimensions.width / dimensions.height;
    return FIXED_HEIGHT * aspectRatio;
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex animate-scroll"
        style={{
          width: 'max-content',
          willChange: 'transform'
        }}
      >
        {tripleImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative px-3"
            style={{
              height: `${FIXED_HEIGHT}px`,
              width: `${getImageWidth(image)}px`
            }}
          >
            <img
              src={image}
              alt={`Yacht ${index + 1}`}
              className={`w-full h-full rounded-lg shadow-lg transition-opacity duration-300 object-cover ${
                loadedImages.has(image) ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;