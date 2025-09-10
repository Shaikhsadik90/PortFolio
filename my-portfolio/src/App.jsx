import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(true);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Sadik.</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="theme-btn" onClick={() => setDark((d) => !d)}>
            {dark ? "🌞" : "🌙"}
          </button>
        </div>
      </header>



      {/* Hero Section */}
      <section ref={heroRef} id="home" className="hero relative overflow-hidden">
        <motion.div style={{ y }} className="hero-content text-center max-w-4xl mx-auto px-4 py-32 relative z-10">
          <h1 className="hero-title text-5xl sm:text-6xl font-extrabold mb-6">
            Hi, I'm <span className="text-gradient animate-gradient">Sadik.</span>
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl mb-8 opacity-90">
            A passionate Web Developer who builds modern websites with React & Tailwind.
          </p>
          <div className="hero-buttons flex justify-center gap-4 flex-wrap">
            <a href="#projects" className="btn btn-gradient">View Projects</a>
            <a href="#contact" className="btn btn-dark">Contact Me</a>
          </div>
        </motion.div>


        {/* Animated background blobs */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>



        {/* Floating skill badges */}
        {["React", "Tailwind", "JS", "Node.js", "Spring Boot", "Sql", "Html", "Css"].map((skill, idx) => (
          <motion.div
            key={skill}
            className="floating-skill"
            style={{
              top: `${Math.random() * 80 + 10}%`,    // 10% to 90% height
              left: `${Math.random() * 80 + 10}%`,   // 10% to 90% width
              zIndex: 5
            }}
            animate={{
              x: [0, 30, -30, 0],    // wider horizontal movement
              y: [0, -30, 30, 0],    // wider vertical movement
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ repeat: Infinity, duration: 8 + idx, ease: "easeInOut" }}
          >
            {skill}
          </motion.div>
        ))}

      </section>



      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm Jack, a passionate and creative full-stack web developer with a focus on building
          responsive and visually appealing websites and applications. I specialize in modern
          front-end technologies like React and Tailwind CSS, and I also have strong experience
          in back-end development with Node.js, Express, Spring Boot, and relational databases
          such as MySQL.
          <br /><br />
          I enjoy turning complex ideas into clean, user-friendly solutions and continuously
          learning new tools and frameworks to improve performance and scalability. Beyond coding,
          I love designing smooth UI/UX experiences, implementing animations, and optimizing
          websites for speed and SEO.
          <br /><br />
          My goal is to create impactful digital experiences that not only look great but also
          deliver real value for users and clients. When I'm not coding, I explore automation,
          cloud technologies, and contribute to open-source projects.
        </p>
      </section>





      {/* Skills Section */}
      <section id="skills" className="section section-dark">
        <h2 className="text-4xl font-bold text-center mb-10 text-indigo-500">Skills</h2>
        <div className="skills-grid grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { name: "HTML", level: 90, exp: "3 years experience" },
            { name: "CSS", level: 88, exp: "3 years experience" },
            { name: "JavaScript", level: 85, exp: "2.5 years experience" },
            { name: "React", level: 80, exp: "2 years experience" },
            { name: "Tailwind", level: 82, exp: "1.5 years experience" },
            { name: "Java", level: 78, exp: "2 years experience" },
            { name: "Spring Boot", level: 75, exp: "1.5 years experience" },
            { name: "MySQL", level: 80, exp: "2 years experience" },
          ].map((skill) => (
            <div key={skill.name} className="skill-card relative group p-4 rounded-xl bg-gray-800 hover:bg-indigo-500 transition cursor-pointer">
              <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
              <div className="h-2 w-full bg-gray-700 rounded mt-2 overflow-hidden">
                <div className="bg-yellow-400 h-2 rounded transition-all duration-500 group-hover:w-[100%]" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="absolute bottom-2 right-2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition">{skill.level}% - {skill.exp}</span>
            </div>
          ))}
        </div>
      </section>





      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: "Gym Website",
              desc: "Responsive modern project using latest technologies.",
              live: "https://gym-website-eight-gilt.vercel.app/index.html",
              code: "https://github.com/Shaikhsadik90/gym-website.git",
              img: "/gym copy.jpeg", // public folder me image rakhni hai
            },
            {
              title: "Tomato Zomato Clone",
              desc: "Clean UI/UX with functional search and filters.",
              live: "https://food-delivery-app-react-js-brown.vercel.app",
              code: "https://github.com/Shaikhsadik90/Food-Delivery-App-React-JS.git",
              img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600",
            },

            {
              title: "Learning Stars",
              desc: "School and Secondary  Website.",
              live: "https://www.learningstarspreschool.com",
              code: "https://github.com/Shaikhsadik90/learning-start.git",
              img: "/WhatsApp1.webp", // public folder me image rakhni hai
            },

          ].map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-image">
                <img src={p.img} alt={p.title} />
                <div className="overlay">
                  <a href={p.live} target="_blank" className="btn btn-live">View Project</a>
                  <a href={p.code} target="_blank" className="btn btn-code">View Code</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>





      {/* Contact Section */}
      <section id="contact" className="section section-dark">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="btn btn-gradient">Send Message</button>
        </form>
      </section>


      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-logo">S A D I K</h2>
          <p className="footer-tagline">
            Building modern, responsive, and creative websites 🚀
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          <p className="footer-copy">© 2025 Sadik. All Rights Reserved.</p>
        </div>
      </footer>



    </div>
  );
}
