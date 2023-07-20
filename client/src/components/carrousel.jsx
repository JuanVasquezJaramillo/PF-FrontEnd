import React, { useState } from "react";
import ReactPlayer from "react-player";
import style from "../modules/carrousel.module.css";

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

  const selectVideo = (index) => {
    
    setCurrentIndex(index)

  };

  return (
    <div className={style.container}>
      
      <div className={style.videoList}>
        <h5>Lista de clases:</h5>
        <ul>
        {videos.map((video, index) => (
          <li
            key={index}
            onClick={() => selectVideo(index)}
            className={`${style.videoListItem} ${
              index === currentIndex ? style.activeVideo : ""
            }`}
          >
            <p>{index + 1}. {video.description}</p>
          </li>
))}

        </ul>
      </div>
      <div className={style.containerVideo}>
        <iframe
          width="600"
          height="315"
          url={videos[currentIndex].url}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> 
      <div className={style.containerButton}>
        <button onClick={prevVideo} className={style.button}>
          Video anterior
        </button>
        <button onClick={nextVideo} className={style.button}>
          Próximo video
        </button>
      </div>
     
    </div>
  );
};

export default Carrousel;
