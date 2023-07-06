function Cards({ trainer }) {
  const { nombre, apellido, tipoUsuario, valoracion, imagen, id } = trainer;
  return (
    <div>
      <Link to={`/home/${id}`}>
        <img src={imagen} alt="imagen not found" />
        <h2>{nombre + apellido}</h2>
        <h2>{tipoUsuario}</h2>
        <p>Valoración:{valoracion}</p>
      </Link>
    </div>
  );
}

export default Cards;
