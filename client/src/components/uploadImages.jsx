import React, { useState } from "react";
import { FormControl, TextField, Button, Box } from "@mui/material";
import Swal from "sweetalert2";
import { Image } from "cloudinary-react";
import style from "../modules/uploadImages.module.css";

const UploadImages = () => {
  const [imageURL, setImageURL] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (event) => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "OT-profile");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dou3yyisb/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          const data = await response.json();
          setImageURL(data.secure_url);
          Swal.fire({
            icon: "success",
            title: "¡Foto subida exitosamente!",
            text: "la foto se ha cargado correctamente.",
            timerProgressBar: true,
          });
        } else {
          console.error("Error al cargar la imagen");
        }
      } catch (error) {
        console.error("Error al cargar la imagen", error);
      }
    }
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setImageURL(URL.createObjectURL(event.target.files[0]));
  };

  const previewImage = () => {
    if (selectedImage) {
      return (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt=""
          width="100"
          height="100"
        />
      );
    }
    // Si no hay imagen seleccionada, mostrar un mensaje alternativo
    return <p>Selecciona una imagen</p>;
  };

  return (
    <div>
      <FormControl>
        <Box mr={2}>
          <TextField
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="fileInput"
          />
        </Box>
      </FormControl>
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt=""
          width="100"
          height="100"
        />
      )}

      <Button variant="contained" color="primary" onClick={handleImageUpload}>
        Cargar tu avatar
      </Button>
    </div>
  );
};
export default UploadImages;
