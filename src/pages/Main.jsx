import React from "react";
import "../styles/Main.css";
import "../styles/App.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="main__page page">
      <div className="main__desc_block">
        <h1 className="main__title">
          I'm Yaroslav, software engineer and web developer.
        </h1>

        <p className="main__desc">
          I specialize in the swift creation of innovative software designs and
          dynamic web applications. Passionate about expressing my journey
          through engaging{" "}
          <Link className="main__desc_pink" to="/projects">
            Projects
          </Link>{" "}
          posts and consistently contributing code to{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TurchynYaroslav"
            className="main__desc_green"
          >
            GitHub
          </a>{" "}
          repositories.
        </p>
      </div>
      <div className="main__projects_uri">
        <p>LATEST PROJECTS</p>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Main;
