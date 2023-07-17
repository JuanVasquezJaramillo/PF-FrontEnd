import { useState } from "react";
import { postPlan } from "../global/clasesSlice/postPlan";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import style from "../modules/trainingNew.module.css";
import ReactPlayer from "react-player/youtube";

const TrainingNew = () => {
  const dispatch = useDispatch();

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const [errors, setErrors] = useState({
    title: "titulo requerido",
    publicDescription: "Descripcion publica requerida",
    privateDescription: "Descripcion privada requerida",
    price: "Precio requerido",
    tags: "Tags requerido",
  });

  const validate = (inputs, name) => {
    if (name === "videos") {
      const videosprueba = inputs.videos.url;
      console.log("aaaaaaaaaa", videosprueba);
      if (videosprueba !== "") setErrors({ ...errors, videosprueba: "" });
      else setErrors({ ...errors, videosprueba: "campo requerido" });
    }

    if (name === "title") {
      if (inputs.title !== "") setErrors({ ...errors, title: "" });
      else setErrors({ ...errors, title: "campo requerido" });
    }
    if (name === "publicDescription") {
      if (inputs.publicDescription !== "")
        setErrors({ ...errors, publicDescription: "" });
      else setErrors({ ...errors, publicDescription: "campo requerido" });
    }
    if (name === "privateDescription") {
      if (inputs.privateDescription !== "")
        setErrors({ ...errors, privateDescription: "" });
      else setErrors({ ...errors, privateDescription: "campo requerido" });
    } else if (name === "price") {
      const regexPreci = /^\d{1,18}(\.\d{1,2})?$/;
      if (inputs.price !== "") setErrors({ ...errors, price: "" });
      else {
        setErrors({ ...errors, price: "rating  requerido" });
        return;
      }
      if (regexPreci.test(inputs.price)) setErrors({ ...errors, price: "" });
      else setErrors({ ...errors, price: "Formato no valido para numeros" });
    }
    if (name === "tags") {
      if (inputs.tags !== "") setErrors({ ...errors, tags: "" });
      else setErrors({ ...errors, tags: "Campo requerido" });
    }
  };
  const [inputs, setInputs] = useState({
    idUser: "0cb0a18f-f626-4d4a-9820-cc6e6807971a",
    title: "",
    publicDescription: "",
    privateDescription: "",
    price: "",
    tags: "",
    video: "",
    publico: "",
    description: "",
    videos: [],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postPlan(inputs));
    setInputs({
    title: "",
    publicDescription: "",
    privateDescription: "",
    price: "",
    tags: "",
    video: "",
    publico: "",
    description: "",
    videos: [],
  });
    console.log(inputs);
  };

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    validate(
      {
        ...inputs,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const handleSubirVideo = () => {
    setInputs({
      ...inputs,
      videos: [
        ...inputs.videos,
        { url: inputs.video, description: inputs.description, publico: true },
      ],
      video: "",
      description: "",
    });
  };
  return (
    // <main>
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.title}>Crear Nuevo Plan</h1>
        <input
          onChange={handleChange}
          placeholder="Titulo de tu Entrenamiento..."
          type="text"
          name="title"
          className={style.input}
        />{" "}
        {errors.title ? <span>{errors.title}</span> : null}
        <input
          onChange={handleChange}
          placeholder="Descripcion Publica de  entrenamiento..."
          type="text"
          name="publicDescription"
          className={style.input}
        />{" "}
        {errors.publicDescription ? (
          <span>{errors.publicDescription}</span>
        ) : (
          <span></span>
        )}
        <input
          onChange={handleChange}
          placeholder="Descripcion Privada de entrenamiento..."
          type="text"
          name="privateDescription"
          className={style.input}
        />{" "}
        {errors.privateDescription ? (
          <span>{errors.privateDescription}</span>
        ) : (
          <span></span>
        )}
        <input
          onChange={handleChange}
          placeholder="Ingrese el precio..."
          type="text"
          name="price"
          className={style.input}
        />{" "}
        {errors.price ? <span>{errors.price}</span> : <span></span>}
        <select name="tags" onChange={handleChange}>
          <option value="">-</option>
          <option value="Natacion">Natacion</option>
          <option value="Futbol">Futbol</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditacion">Meditacion</option>
          <option value="Ejercicio fisico">Ejercicio fisico</option>
          <option value="Ajedrez">Ajedrez</option>
          <option value="Boxeo">Boxeo</option>
          <option value="	Ciclismo de ruta"> Ciclismo de ruta</option>
        </select>
        {errors.tags ? <span>{errors.tags}</span> : <span></span>}
        <input
          onChange={handleChange}
          type="text"
          placeholder="Ingrese la url del video..."
          name="video"
          className={style.input}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Descripcion del video"
          name="description"
          className={style.input}
        />
        <button type="button" onClick={() => handleSubirVideo()}>
          Subir
        </button>
        <input disabled={disable()} type="submit" />
      </form>
      <div className={style.form}>
        {inputs.videos.length !== 0 ? (
          <div>
            <h2 className={style.title}>Videos subidos</h2>
            {inputs.videos.map((video, index) => (
              <h2 key={index}>
                • {video.url} {video.description}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
    </div>

    // </main>
  );
};

export default TrainingNew;
