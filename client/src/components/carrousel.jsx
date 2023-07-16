import React, { useState } from "react";
import ReactPlayer from "react-player";

const Carrousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div>
      <div>
        <iframe
          width="560"
          height="315"
          src={videos[currentIndex].url}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={prevVideo}>Video anterior</button>
      <button onClick={nextVideo}>Próximo video</button>
    </div>
  );
};

export default Carrousel;
