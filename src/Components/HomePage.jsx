import "../styles/home.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/Profile.jpg";
import resume from "../assets/Lokesh_Bharathi_A.pdf";

function Home() {
  return (
    <section className="home">
      {/* Left Side */}
      <div className="left">
        <motion.div
          className="profile-wrapper"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <div className="outer-ring"></div>
          <img src={profile} alt="profile" className="profile-img" />

          <a
            href="https://github.com/LokeshBharathia-?tab=repositories"
            className="icon github"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/lokesh-bharathi-a-622a77328?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/_mom_lub_lk?utm_source=qr&igsh=OWxtMWl0cndlZXAz"
            className="icon instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:ayyappanlokesh3@gmail.com"
            className="icon email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="right">
        <p className="hello">Hello 👋 I'm</p>
        <h1>Lokesh Bharathi A</h1>
        <h2>Full Stack Developer</h2>
        <p className="desc">
          Passionate Full Stack Developer specializing in building modern,
          responsive, and user-friendly web applications. I enjoy creating clean
          UI designs and scalable backend solutions.
        </p>

        <div className="buttons">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Lokesh Bharathi A Resume.pdf"
            className="btn"
          >
            Download CV
          </a>
          <a
            href="https://wa.me/916380407915"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;