import { useState } from "react";
import "../styles/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ContactPage() {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");

  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*New Portfolio Contact*%0A%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${messageText}`;

    window.open(`https://wa.me/916380407915?text=${message}`, "_blank");

    // Clear Form
    setName("");
    setEmail("");
    setSubject("");
    setMessageText("");
  };

  return (
    <section className="contact">
      {/* Left Column: Contact Details */}
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="contact-title">CONTACT</span>
        <h2>
          Let's Work <span>Together</span>
        </h2>
        <p>
          Have a project idea or looking for a Full Stack React Developer to contact
          me. I'm always open to discussing new opportunities and exciting projects.
        </p>

        <div className="contact-info">
          {/* Email Box */}
          <div className="info-box">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>ayyappanlokesh3@gmail.com</p>
            </div>
          </div>

          {/* Phone Box */}
          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 6380407915</p>
            </div>
          </div>

          {/* Location Box */}
          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Social Icons Links */}
        <div className="socials">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Right Column: Interactive Form */}
      <motion.div
        className="contact-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactPage;