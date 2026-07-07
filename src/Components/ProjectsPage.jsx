import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const projects = [
  {
    title: "E-Commerce Website",
    image: "https://picsum.photos/500/300?1",
    desc: "Modern e-commerce application using javascript,react & redux",
    tech: ["javascript","react","redux"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    image: "https://picsum.photos/500/300?2",
    desc: "Weather forecast app using Openweather API with modern UI.",
    tech: ["React", "CSS", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    image: "https://picsum.photos/500/300?3",
    desc: "Personal portfolio with animations and responsive design.",
    tech: ["React", "Framer Motion"],
    github: "#",
    live: "#",
  },
];

function ProjectPage() {
  return (
    <section className="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <p className="section-desc">
        Here are some of the projects I've built using the React.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />

            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-btns">
                <a href={project.github}>
                  <FaGithub /> Github
                </a>
                <a href={project.live}>
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;