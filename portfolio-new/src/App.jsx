import React from "react";
import "./App.css";

function App() {
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <nav>
        <h2>Karishma.</h2>

        <div>
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("about")}>About</button>
          <button onClick={() => goTo("skills")}>Skills</button>
          <button onClick={() => goTo("projects")}>Projects</button>
          <button onClick={() => goTo("contact")}>Contact</button>
        </div>
      </nav>

      <section id="home" className="home">
        <div>
          <p className="hello">HELLO, I'M</p>
          <h1>Karishma Shahu</h1>
          <h2>Frontend Developer</h2>

          <p className="description">
            I create modern and user-friendly websites using HTML, CSS,
            JavaScript and React.
          </p>

          <button className="main-btn" onClick={() => goTo("projects")}>
            View My Projects
          </button>
        </div>

        <div className="profile">
  <img src="/profile.jpg" alt="Karishma" />
</div>
      </section>

      <section id="about">
        <p className="hello">ABOUT ME</p>
        <h2>About Me</h2>
        <p className="description center">
          I am a passionate learner and aspiring frontend developer.
          I enjoy creating attractive websites and learning new technologies.
        </p>
      </section>

      <section id="skills">
        <p className="hello">MY SKILLS</p>
        <h2>Skills</h2>

        <div className="cards">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
        </div>
      </section>

      <section id="projects">
        <p className="hello">MY PROJECTS</p>
        <h2>Projects</h2>

        <div className="project">
          <h3>Portfolio Website</h3>
          <p>My personal portfolio created using React.</p>
        </div>
      </section>

      <section id="contact">
        <p className="hello">CONTACT ME</p>
        <h2>Let's Connect</h2>
        <p className="description center">
          Email: karishmashahu2006@gmail.com
        </p>

        <button
          className="main-btn"
          onClick={() =>
            (window.location.href = "mailto:karishmashahu2006@gmail.com")
          }
        >
          Send Email
        </button>
      </section>
    </div>
  );
}

export default App;