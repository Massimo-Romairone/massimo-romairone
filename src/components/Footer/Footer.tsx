import { faSquareGithub, faSquareInstagram, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons-footer">
                <div className="icon-footer">
                    <a href=""><FontAwesomeIcon icon={faSquareLinkedin} /></a>
                </div>
                
                <div className="icon-footer">
                    <a href=""><FontAwesomeIcon icon={faSquareInstagram} /></a>
                </div>

                <div className="icon-footer">
                    <a href=""><FontAwesomeIcon icon={faSquareGithub} /></a>
                </div>
            </div>
            <p>© 2025 Massimo Romairone. All rights reserved.</p>
        </footer>
    );
}

export default Footer;