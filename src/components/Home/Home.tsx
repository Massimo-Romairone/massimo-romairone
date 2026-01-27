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
          <p>Desarrollador Web Full Stack</p>

          <div className="section1-buttons">
            <a href="#about" className="section1-button1">Sobre mi</a>
            <a href="#projects" className="section1-button2">Proyectos</a>
          </div>
        </div>

          <div className="part2">
            <div className="foto-container">
              <div className="glow-back"></div>
              <img src="perfil.png" alt="Massimo Romairone" className="fotoPerfil" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
          </div>
      </section>
    </>
  );
}
export default Home;