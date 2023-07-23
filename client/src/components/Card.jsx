import React from "react";
import ReactPlayer from "react-player/youtube";
import style from "../modules/Card.module.css";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const CustomCard = (props) => {
  const id = props.idPlan;
  const cardStyle = {
    maxWidth: 345,
    margin: "20px auto",
  };

  return (
    <Card style={cardStyle}>
      <div>
        <ReactPlayer url={props.primerVideoUrl} width="100%" height="15rem" />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/IdDetailsTraining/${id}`} className={style.link}>
            <h2> {id}</h2>
          </Link>
        </Typography>
        {/* probando merge */}
        <Link to={`/training/${id}`} className={style.link}>
          <Typography variant="body2" color="text.secondary">
            <h2 className={style.userName}>{props.userName}</h2>
            <h2 className={style.title}>{props.title}</h2>
            <h2 className={style.price}>${props.price}</h2>
            <h2 className={style.publicDescription}>
              {props.publicDescription}
            </h2>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
