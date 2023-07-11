import estilo from "../modules/UserProfile.module.css";
import cake from "../assets/pastelito.png";
import mancuerna from "../assets/mancuerna.png";
import contrato from "../assets/contrato.png";
import entreno from "../assets/entrenando.png";
import { useState } from "react";

const UserProfile = () => {
  const [imagenUser, setImgUser] = useState({
    file: "",
  });

  const handleFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImgUser({ file: [URL.createObjectURL(file)] });
    console.log("PROBANDO", imagenUser);
  };

  return (
    <div>
      <div className={estilo.contenedor}>
        <div>
          {imagenUser.file && (
            <div>
              <img
                className={estilo.img}
                src={imagenUser.file}
                alt="IMAGEN"
              ></img>
            </div>
          )}
          <form action="">
            <input
              type="file"
              accept="image/jpeg,image/jpg"
              onChange={handleFile}
            />
          </form>
        </div>

        {/* <div>
                    <img className={estilo.img} src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg" alt="" />
                </div>
                 */}

        <h1>NOMBRE USUARIO</h1>
      </div>

      <div className={estilo.contenedorInfo} id="PADRE">
        <div className={estilo.contenedorDif}>
          <div className={estilo.subContenedorDif}>
            <h4>
              <img src={cake} alt="" />
              26 de junio
            </h4>
            <label htmlFor="">Fecha de nacimiento</label>
          </div>
        </div>

        <div className={estilo.contenedorDif}>
          <div className={estilo.subContenedorDef}>
            <h4>
              <img src={mancuerna} alt="" />
              69kg
            </h4>
            <label htmlFor="">Peso</label>
          </div>
        </div>

        <div className={estilo.contenedorDif}>
          <div className={estilo.subContenedorDuf}>
            <h4>
              <img src={contrato} alt="" />
              Profesor
            </h4>
            <label htmlFor="">Ocupación</label>
          </div>
        </div>

        <div className={estilo.contenedorDif}>
          <div className={estilo.subContenedorDof}>
            <h4>
              <img src={entreno} alt="" />
              Pierna
            </h4>
            <label htmlFor="">Objetivo</label>
          </div>
        </div>

        <div>
          {/* <iframe width="500" height="290" src="https://www.youtube.com/embed/N_kP42cVd6M?list=RDN_kP42cVd6M" frameborder="0"></iframe>
           */}
          <iframe
            width="600"
            height="409"
            src="https://www.youtube.com/embed/x9hUaSohDSQ"
            title="4 ejercicios de piernas con mancuernas para resultados asombrosos"
            frameBorder="0"
            allow="autoplay;encrypted-media; web-share"
          ></iframe>
        </div>

        <div className={estilo.contenedorBotones}>
          <button className={estilo.botones}>Rutinas</button>
          <button className={estilo.botones}>Chat</button>
        </div>
        <div className={estilo.contenedorTest}>
          <button className={estilo.test}>CHAT</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
