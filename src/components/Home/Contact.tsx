import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, type FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [status, setStatus] = useState({ message: '', type: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const response = await fetch("https://formspree.io/f/xgooewwe", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    setIsSending(false);

    if (response.ok) {
      setStatus({ message: "¡Mensaje enviado con éxito!", type: "success" });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      setStatus({ message: "Oops! Hubo un problema.", type: "error" });
    }

    setTimeout(() => setStatus({ message: '', type: '' }), 5000);
  };


  return (
    <>
      <section id="contact" className="contact">
        <p>Contact Me</p>

        <div className="container-contact">
          <div className="contact-container1">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="text" 
                name="phone"
                placeholder="Phone" 
                value={formData.phone}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea 
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
                <button type="submit" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </button>
                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="contact-container2">
            <ul className="contact-info">
              <li className="info-item">
                <FontAwesomeIcon icon={faPhone}/>
                <div className="info-p">
                  <h4><span>Phone</span></h4>
                  <p>+54 9 249 463-3238</p>
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
