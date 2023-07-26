import style from "../modules/aboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Sobre Nosotros</h1>
      <div className={style.containerSomos}>
        <div className={style.somos}>
          <h2 className={style.titleBis}>Somos OnlyTrainers</h2>
          <p className={style.parrafo}>
            Una página intermediaria en donde podrás compartir tus
            entrenamientos tanto gratuitamente como por suscripción o si eres
            una persona buscando entrenar podrás buscar tu entrenador favorito
            ver sus clases
          </p>
        </div>
        <div className={style.imagen}>
          <img
            src="https://images.pexels.com/photos/6453396/pexels-photo-6453396.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width="250px"
            height="200px"
          />
        </div>
      </div>
      <div className={style.containerSomos}>
        <img
          src="https://images.pexels.com/photos/8032728/pexels-photo-8032728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="350px"
        />
        <div className={style.somos}>
          <h3 className={style.titleBis}>¿A qué apuntamos?</h3>
          <p className={style.parrafo}>
            En OnlyTrainers, nuestra misión es facilitar el acceso a
            entrenamientos de calidad y ofrecer una experiencia única en el
            mundo del fitness. Queremos brindar la oportunidad a personas de
            todos los niveles de acondicionamiento físico para alcanzar sus
            objetivos con el apoyo de entrenadores calificados y una comunidad
            activa.
          </p>
        </div>
      </div>
      <section className={style.section}>
        <div className={style.caracteristicas}>
          <h3>Entrená con los mejores entrenadores!</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2936/2936886.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p className={style.parrafoSection}>
            En OnlyTrainers, te brindamos la oportunidad de entrenar con los
            mejores profesionales del fitness. Nuestros entrenadores altamente
            calificados están listos para guiarte y ayudarte a alcanzar tus
            objetivos de acondicionamiento físico. Ya sea que seas principiante
            o tengas experiencia, encontrarás un entrenador perfecto para ti.
          </p>
        </div>
        <div className={style.caracteristicas}>
          <h3>Virtual!</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/128/6143/6143408.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p className={style.parrafoSection}>
            Nuestro enfoque virtual te permite acceder a una amplia variedad de
            entrenamientos desde la comodidad de tu hogar. Puedes entrenar con
            instructores de primer nivel sin importar tu ubicación. Esta nueva
            tendencia ha llegado para quedarse, brindándonos una experiencia de
            ejercicio cómoda, flexible y altamente efectiva.
          </p>
        </div>
        <div className={style.caracteristicas}>
          <h3>En casa o donde quieras!</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/128/5973/5973800.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p className={style.parrafoSection}>
            Con OnlyTrainers, la ubicación ya no es un obstáculo para entrenar.
            Puedes realizar tus sesiones de entrenamiento en casa o en cualquier
            lugar que elijas. Nuestro objetivo es brindarte la máxima
            flexibilidad para que puedas mantener una rutina de ejercicio
            constante y alcanzar tus metas sin complicaciones.
          </p>
        </div>
      </section>

      <h2 className={style.title}>Creadores</h2>
      <section className={style.sectionCreadores}>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Gabriel Beltran</p>
          <p>front-end dev</p>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Elías Chanquia</p>
          <p>backend dev</p>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Pablo Vasquez</p>
          <p>front-end dev</p>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Daniel Sotelo</p>
          <p>backend dev</p>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Angel Silva</p>
          <p>front-end dev</p>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Santiago Gavidia</p>
          <p>front-end dev</p>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
