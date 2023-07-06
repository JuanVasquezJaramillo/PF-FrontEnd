function Cards({ trainer }) {
  const { nombre, apellido, tipoUsuario, valoracion, imagen, id } = trainer;
  return (
    <div>
      <img src={imagen} alt="imagen not found" />
      <h2>{tipoUsuario}</h2>
      <h2>{nombre + apellido}</h2>
      <p>Valoración:{valoracion}</p>
    </div>
  );
}

export default Cards;
