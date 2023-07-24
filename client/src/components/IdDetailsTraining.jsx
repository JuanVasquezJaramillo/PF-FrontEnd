import { useEffect, useState } from "react";
import { postPlan } from "../global/clasesSlice/postPlan.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getById } from "../global/clasesSlice/clasesSlice";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import style from "../modules/idDetailsTraining.module.css";
import { deletePlan } from "../global/clasesSlice/DeletePlan.js";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

const IdDetailsTraining = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);
  const detailsPlan = useSelector((state) => state.clases.list);
  console.log("MATEO", detailsPlan);
  // datos del segundo array
  const description = detailsPlan[1]?.[0]?.description;
  const idVideo = detailsPlan[1]?.[0]?.idVideo;
  const publico = detailsPlan[1]?.[0]?.publico;
  const url = detailsPlan[1]?.[0]?.url;
  const descriptionuno = detailsPlan[1]?.[1]?.description;
  const urluno = detailsPlan[1]?.[1]?.url;
  const descriptiondos = detailsPlan[1]?.[2]?.descriptiondos;
  const urldos = detailsPlan[1]?.[2]?.urldos;
  //  const descriptionPrueba = detailsPlan[1]

  const title = detailsPlan[0]?.title;
  // datos del primer array
  const publicDescription = detailsPlan[0]?.publicDescription;
  const privateDescription = detailsPlan[0]?.privateDescription;
  const price = detailsPlan[0]?.price;
  const tags = detailsPlan[0]?.tags;

  // datos del tercer array

  const idUser = detailsPlan[2]?.idUser;
  const userName = detailsPlan[2]?.userName;

  const [inputs, setInputs] = useState({
    title: title,
    publicDescription: publicDescription,
    privateDescription: privateDescription,
    price: price,
    tags: tags,
    description: description,
    url: url,
    descriptionuno: descriptionuno,
    urluno: urluno,
  });
  console.log("PROBANDO ESTADOS", title);

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
    title: "",
    publicDescription: "",
    privateDescription: "",
    price: "",
    tags: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(deletePlan(id));
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

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <Typography variant="h4">Detalle del Plan</Typography>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Titulo de tu Entrenamiento..."
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            error={Boolean(errors.title)}
            helperText={errors.title ? errors.title : ""}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Descripcion Publica de entrenamiento..."
            type="text"
            name="publicDescription"
            value={inputs.publicDescription}
            onChange={handleChange}
            error={Boolean(errors.publicDescription)}
            helperText={
              errors.publicDescription ? errors.publicDescription : ""
            }
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Descripcion Privada de entrenamiento..."
            type="text"
            name="privateDescription"
            value={inputs.privateDescription}
            onChange={handleChange}
            error={Boolean(errors.privateDescription)}
            helperText={
              errors.privateDescription ? errors.privateDescription : ""
            }
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Ingrese el precio..."
            type="text"
            name="price"
            value={inputs.price}
            onChange={handleChange}
            error={Boolean(errors.price)}
            helperText={errors.price ? errors.price : ""}
          />
        </Box>
        <Box>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Tags</InputLabel>
            <Select
              name="tags"
              value={inputs.tags}
              onChange={handleChange}
              error={Boolean(errors.tags)}
              label="tags"
            >
              <MenuItem value="">-</MenuItem>
              <MenuItem value="Natacion">Natacion</MenuItem>
              <MenuItem value="Futbol">Futbol</MenuItem>
              <MenuItem value="Yoga">Yoga</MenuItem>
              <MenuItem value="Meditacion">Meditacion</MenuItem>
              <MenuItem value="Ejercicio fisico">Ejercicio fisico</MenuItem>
              <MenuItem value="Ajedrez">Ajedrez</MenuItem>
              <MenuItem value="Boxeo">Boxeo</MenuItem>
              <MenuItem value="Ciclismo de ruta">Ciclismo de ruta</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {errors.tags && <span>{errors.tags}</span>}
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Ingrese la descripcion Video uno.."
            type="text"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            error={Boolean(errors.description)}
            helperText={errors.description ? errors.description : ""}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Ingrese el la url para modificar..."
            type="text"
            name="url"
            value={inputs.url}
            onChange={handleChange}
            error={Boolean(errors.url)}
            helperText={errors.url ? errors.url : ""}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Ingrese descripcion video 2..."
            type="text"
            name="descriptionuno"
            value={inputs.descriptionuno}
            onChange={handleChange}
            error={Boolean(errors.descriptionuno)}
            helperText={errors.descriptionuno ? errors.descriptionuno : ""}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Ingrese el la url..."
            type="text"
            name="urluno"
            value={inputs.urluno}
            onChange={handleChange}
            error={Boolean(errors.urluno)}
            helperText={errors.urluno ? errors.urluno : ""}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Usuario..."
            type="text"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
        </Box>
        <div className={style.button}>
          <Button variant="contained" color="primary" type="submit">
            Actualizar
          </Button>
          <Button variant="contained" color="secondary">
            Eliminar
          </Button>
        </div>
      </form>
    </div>
  );
};
export default IdDetailsTraining;
