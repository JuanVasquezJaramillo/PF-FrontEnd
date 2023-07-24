import React, { useState } from "react";
import ReactPlayer from "react-player";
import style from "../modules/carrousel.module.css";
import {
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ButtonGroup,
  Grid,
} from "@mui/material";

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
    setCurrentIndex(index);
  };

  return (
    <Grid
      container
      className={style.container}
      justify="center"
      alignItems="center"
    >
      <div>
        <div className={style.containerVideo}>
          <ReactPlayer
            width="50vw"
            height="55vh"
            url={videos[currentIndex].url}
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></ReactPlayer>
        </div>
        <div className={style.containerButton}>
          <Button
            onClick={prevVideo}
            className={style.button}
            variant="contained"
            color="primary"
          >
            Video anterior
          </Button>
          <Button
            onClick={nextVideo}
            className={style.button}
            variant="contained"
            color="primary"
          >
            Próximo video
          </Button>
        </div>
      </div>
      {/* Lista de miniaturas de video */}
      <div className={style.videoList}>
        <Typography variant="h6" gutterBottom textAlign="center" mt="20px">
          Lista de clases:
        </Typography>
        <List component="ul">
          {videos.map((video, index) => (
            <ListItem
              key={index}
              onClick={() => selectVideo(index)}
              button
              className={`${style.videoListItem} ${
                index === currentIndex ? style.activeVideo : ""
              }`}
            >
              <ListItemText primary={`- Clase número: ${index + 1}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </Grid>
  );
};

export default Carrousel;

{
  /* <Grid className={`${style.videoList}`}>
        <Typography variant="h6" gutterBottom textAlign="center" mt="20px">
          Lista de clases:
        </Typography>
        <List component="ul">
          {videos.map((video, index) => (
            <ListItem
              key={index}
              onClick={() => selectVideo(index)}
              button
              className={`${style.videoListItem} ${
                index === currentIndex ? style.activeVideo : ""
              }`}
            >
              <ListItemText primary={`- Clase número: ${index + 1}`} />
            </ListItem>
          ))}
        </List>
      </Grid> */
}
