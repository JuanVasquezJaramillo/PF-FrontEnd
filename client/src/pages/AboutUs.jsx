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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam
            quia cumque magnam, obcaecati nemo cum voluptate sequi ipsa eos,
            blanditiis tempora nam beatae illum itaque facilis pariatur magni
            nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            nulla sapiente amet, libero voluptas beatae pariatur repudiandae
            exercitationem voluptatem, quasi animi nihil illo quis aliquid
            necessitatibus sit rem dicta ea.
          </p>
        </div>
      </div>
      <section className={style.section}>
        <div className={style.caracteristicas}>
          <h3>Entrená!</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2936/2936886.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p className={style.parrafoSection}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            voluptatum! Ad ipsam praesentium reprehenderit, temporibus libero
            non consequatur deserunt corrupti odio eaque perferendis, sunt
            tenetur provident amet ea facilis consequuntur?
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            voluptatum! Ad ipsam praesentium reprehenderit, temporibus libero
            non consequatur deserunt corrupti odio eaque perferendis, sunt
            tenetur provident amet ea facilis consequuntur?
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            voluptatum! Ad ipsam praesentium reprehenderit, temporibus libero
            non consequatur deserunt corrupti odio eaque perferendis, sunt
            tenetur provident amet ea facilis consequuntur?
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
