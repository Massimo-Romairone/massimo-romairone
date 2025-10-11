
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <p>Contact Me</p>

        <div className="container-contact">
          <div className="contact-container1">
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

          <div className="contact-container2">
            <ul className="contact-info">
              <li className="info-item">
                <FontAwesomeIcon icon={faPhone}/>
                <div className="info-p">
                  <h4><span>Phone</span></h4>
                  <p>+123 456 7890</p>
                </div> 
              </li>
              <li className="info-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="info-p">
                  <h4><span>Email</span></h4>
                  <p>mopvladd@gmail.com</p>
                </div>
              </li>
              <li className="info-item">
                <FontAwesomeIcon icon={faLocationDot} />
                <div className="info-p">
                  <h4><span>Location</span></h4>
                  <p>Ayacucho, Buenos Aires, Argentina</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Contact;
