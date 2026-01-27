import { faSquareGithub, faSquareInstagram, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons-footer">
                <div className="icon-footer">
                    <a href="https://www.linkedin.com/in/massimo-gianfranco-romairone-00a8743a0/"><FontAwesomeIcon icon={faSquareLinkedin} /></a>
                </div>
                
                <div className="icon-footer">
                    <a href="https://www.instagram.com/canu.bj/"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                </div>

                <div className="icon-footer">
                    <a href="https://github.com/Massimo-Romairone"><FontAwesomeIcon icon={faSquareGithub} /></a>
                </div>
            </div>
            <p>Massimo Gianfranco Romairone</p>
            <p>Full Stack Developer</p>
        </footer>
    );
}

export default Footer;