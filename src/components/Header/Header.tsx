import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <div className="header-content">
                <img src="./mgrLogo.png" alt="Logo" className="logo" onContextMenu={(e) => e.preventDefault()} draggable="false"/>

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon 
                        icon={menuOpen ? faXmark : faBars} 
                        className="icon-style" 
                    />
                </div>
                
                <nav className={menuOpen ? "nav-active" : ""}>
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
                        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}
export default Header;
