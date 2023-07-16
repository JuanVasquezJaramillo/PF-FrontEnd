import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByNameTag } from "../../global/clasesSlice/clasesSlice";
import estilo from "../../modules/SearchBar.module.css";
import Swal from "sweetalert2"; //Importación de la libreria sweetalert2 que permite mostrar alertas bien GG's

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  //---------HANDLERS----------

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    if (!name.length) {
      Swal.fire({
        text: "Debes ingresar un parametro de busqueda.",
        icon: "info",
        confirmButtonText: "ok",
      });
    }
    dispatch(getByNameTag(name));
  };
  //--------FIN HANDLERS------

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form style={{ display: "flex", justifyContent: "center" }} action="">
          <input
            type="search"
            onChange={(event) => handleChange(event)}
            value={name}
            className={estilo.inputSearch}
            placeholder="Buscar actividad..."
          />
          <button
            type="submit"
            onClick={(event) => handleSubmit(event)}
            className={estilo.btnSearch}
          ></button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
