import { useState } from "react";
import { postPlan } from "../global/clasesSlice/postPlan";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import style from "../modules/trainingNew.module.css";
import ReactPlayer from "react-player/youtube";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";

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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        minHeight="calc(100vh - 81.5px)"
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <form onSubmit={handleSubmit}>
              <Box
                p={4}
                border="1px solid #ccc"
                borderRadius={8}
                boxShadow={2}
                bgcolor="#8ecae671"
              >
                <h1 className={style.title}>Crear Nuevo Plan</h1>
                <Box mb={2}>
                  <TextField
                    label="Titulo de tu entrenamiento"
                    onChange={handleChange}
                    type="text"
                    name="title"
                    className={style.input}
                    variant="filled"
                    fullWidth
                    required
                    error={!!errors.title}
                    helperText={errors.title}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Descripción pública de entrenamiento"
                    onChange={handleChange}
                    type="text"
                    name="publicDescription"
                    variant="filled"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={!!errors.publicDescription}
                    helperText={errors.publicDescription}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Descripción privada de entrenamiento"
                    onChange={handleChange}
                    placeholder="Descripcion Privada de entrenamiento..."
                    type="text"
                    name="privateDescription"
                    variant="filled"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={!!errors.privateDescription}
                    helperText={errors.privateDescription}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    onChange={handleChange}
                    label="Ingrese el precio"
                    placeholder="Ingrese el precio..."
                    type="text"
                    name="price"
                    variant="filled"
                    fullWidth
                    required
                    error={!!errors.price}
                    helperText={errors.price}
                  />
                </Box>
                <Box mb={2}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    required
                    error={!!errors.tags}
                  >
                    <InputLabel>Tags</InputLabel>
                    <Select name="tags" onChange={handleChange} label="Tags">
                      <MenuItem value="">-</MenuItem>
                      <MenuItem value="Natacion">Natacion</MenuItem>
                      <MenuItem value="Futbol">Futbol</MenuItem>
                      <MenuItem value="Yoga">Yoga</MenuItem>
                      <MenuItem value="Meditacion">Meditacion</MenuItem>
                      <MenuItem value="Ejercicio fisico">
                        Ejercicio fisico
                      </MenuItem>
                      <MenuItem value="Ajedrez">Ajedrez</MenuItem>
                      <MenuItem value="Boxeo">Boxeo</MenuItem>
                      <MenuItem value="	Ciclismo de ruta">
                        {" "}
                        Ciclismo de ruta
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box mb={2}>
                  <TextField
                    onChange={handleChange}
                    type="text"
                    placeholder="Ingrese la url del video..."
                    name="video"
                    label="Ingrese la url del video"
                    variant="filled"
                    fullWidth
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    onChange={handleChange}
                    type="text"
                    placeholder="Descripcion del video"
                    name="description"
                    label="Descripcion del video"
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                <Box mb={2}>
                  <Button
                    type="button"
                    onClick={() => handleSubirVideo()}
                    variant="contained"
                    color="primary"
                  >
                    Subir
                  </Button>
                </Box>
                <Box mb={2}>
                  <Button
                    disabled={disable()}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubirVideo()}
                  >
                    Subir entrenamiento
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className={style.form}>
              {inputs.videos.length !== 0 ? (
                <div>
                  <h2 className={style.title}>Videos subidos</h2>
                  {inputs.videos.map((video, index) => (
                    <h4 key={index} className={style.videoList}>
                      {index + 1} {video.url} <br />
                      <span>//Descripción</span> <br /> {video.description}
                    </h4>
                  ))}
                </div>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>

    // </main>
  );
};

export default TrainingNew;
