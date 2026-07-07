import "../styles/about.css";
import { motion } from "framer-motion";
import profile from "../assets/Profile.jpg";
function About() {
  return (
    <section className="about" id="about">
      {/* Left Column: Profile Image Animation */}
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-img">
          <img src={profile} alt="Profile" />
        </div>
      </motion.div>

      {/* Right Column: Bio and Skills Animation */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-title">ABOUT ME</span>
        <h2>
          I'm <span>Lokesh Bharathi A</span>
        </h2>
        <h3>Full Stack React Developer</h3>
        <p>
          I am a passionate Full Stack React Developer with experience in
          building responsive, modern and scalable web applications. I enjoy
          creating attractive designs and developing secure backend systems
          using javascript, reactjs, react-redux.
        </p>

        {/* Personal Info Grid */}
        <div className="info-grid">
          <div>
            <strong>Name :</strong> Lokesh Bharathi A
          </div>
          <div>
            <strong>Email :</strong> ayyappanlokesh3@gmail.com
          </div>
          <div>
            <strong>Phone :</strong> +91 63804 07915
          </div>
          <div>
            <strong>Location :</strong> Tamil Nadu, India
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills">
          {/* React Skill */}
          <div className="skill">
            <div className="skill-title">
              <span>react js</span>
              <span>90%</span>
            </div>
            <div className="bar">
              <div className="fill react"></div>
            </div>
          </div>

          {/* redux  Skill */}
          <div className="skill">
            <div className="skill-title">
              <span>redux </span>
              <span>85%</span>
            </div>
            <div className="bar">
              <div className="fill node"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;