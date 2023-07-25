import React from "react";
import ReactPlayer from "react-player/youtube";
import style from "../modules/Card.module.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

const CustomCard = (props) => {
  const idUser = props.idUser;

  const id = props.idPlan;
  const cardStyle = {
    width: "30rem",
    margin: "20px auto",
    boxShadow: "2px 4px 8px black",
    borderRadius: "20px",
  };

  return (
    <Card style={cardStyle}>
      <CardMedia>
        <ReactPlayer url={props.primerVideoUrl} width="100%" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/IdDetailsTraining/${id}`} className={style.link}>
            <Typography variant="h6">{id}</Typography>
          </Link>
        </Typography>
        {/* probando merge */}
        <Link to={`/alternativeProfile/${idUser}`}   >
        <Typography variant="h6" className={style.userName}>
          {props.userName}
        </Typography>
        </Link>
        <Link to={`/alternativeDetail/${id}`} className={style.link}>
          <Typography variant="body2" color="text.secondary">
            {/* Usamos Typography para mostrar los detalles */}
            <Typography variant="h6" className={style.title}>
              {props.title}
            </Typography>
            <Typography variant="h6" className={style.price}>
              ${props.price}
            </Typography>
            <Typography variant="h6" className={style.publicDescription}>
              {props.publicDescription}
            </Typography>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
