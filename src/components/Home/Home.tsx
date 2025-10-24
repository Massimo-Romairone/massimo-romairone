import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="part1">
          <p>Hola.</p>
          <p>Soy{" "}
            <span className="nombre-wrapper">
              <TypeAnimation
                sequence={[
                  "Massimo Romairone", 2000,
                  "", 1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={10}
                className="nombre"
              />
            </span>
          </p>
          <p>Desarrollador Web</p>

          <div className="section1-buttons">
              <button className="section1-button1">Sobre mi</button>
              <button className="section1-button2">Proyectos</button>
          </div>
        </div>

          <div className="part2">
              <img src="./menorQueV2.png" alt="Menor que" className="signo1" />
              <img src="https://static.vecteezy.com/system/resources/previews/047/848/782/non_2x/user-profile-sign-on-white-background-vector.jpg" alt="Foto de perfil" className="fotoPerfil"/>
              <img src="./mayorQueV2.png" alt="Mayor que" className="signo2" />
          </div>
      </section>
    </>
  );
}
export default Home;