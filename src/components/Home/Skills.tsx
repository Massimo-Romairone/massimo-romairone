import { useEffect } from "react";

const Skills = () => {
    
    useEffect(() => {
        const skills = document.querySelectorAll(".skills-container .skill");

        const observer = new IntersectionObserver(
            (entries) => {entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
            },
            { threshold: 0.2, }
        );

        skills.forEach((skill) => observer.observe(skill));
    }, []);
  return (
    <section id="skills" className="skills">
        <p>Skills</p>
        <div className="skills-container">
            <div className="skill">
                <h2>HTML</h2>
                <img src="./html.png" alt="" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
            <div className="skill">
                <h2>CSS</h2>
                <img src="./css.png" alt="" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
            <div className="skill">
                <h2>JavaScript</h2>
                <img src="./js.png" alt="" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
            <div className="skill">
                <h2>TypeScript</h2>
                <img src="./ts.png" alt="" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
            <div className="skill">
                <h2>NestJS</h2>
                <img src="./nest.png" alt="" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
            <div className="skill">
                <h2>React</h2>
                <img src="./react.png" alt="" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
            <div className="skill">
                <h2>GitHub</h2>
                <img src="./github.png" alt="" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
            </div>
        </div>
    </section>
  );
}
export default Skills;