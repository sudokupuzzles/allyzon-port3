import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project6() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">My Old Random</div>
          <div className="title2">Designs / Projects</div>
        </div>
        <div className="project1-intro-box">
          <div className="project1-intro">
            <h4 className="h4-project">
              Old Random Designs / Projects just for Fun
            </h4>
            <p className="p-project">
              These are my first designs coded in HTML and CSS. Clicking the
              main image below will lead you to my Github Link. These are just
              one of my first trials to test out my learnings in HTML and CSS
              when I was a teenager.I first learned HTML and CSS when I was 15.
              I am grateful that this subject was introduced to us when I was in
              high school. Other sections doesnt have this subject.
            </p>
          </div>
        </div>

        {/* Design Process */}
        <div className="design-process">
          <img
            src="../projects/project1/design-process.svg"
            alt="back-button-icon"
            className="process-image"
          />
        </div>

        <div className="sketching-planning">
          <h5 className="h5-project">Overview</h5>
          <a
            href="https://github.com/allyzonalison/all-CSS-from-Scratch"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../projects/old-random-designs.svg"
              alt="back-button-icon"
              className="process-image"
            />{" "}
          </a>
        </div>
        <a
          href="https://github.com/allyzonalison/all-CSS-from-Scratch"
          className="link lol"
          target="_blank"
          rel="noreferrer"
        >
          <div class="btn-see-more link">
            <img
              src="../imgs/see-more-icon.jpg"
              class="see-more-icon"
              alt="desc"
            />
            See More
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Project6;
