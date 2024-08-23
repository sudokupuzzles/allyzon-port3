import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project3() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">My Portfolio</div>
          <div className="title2">Aira Claveria</div>
        </div>
        <div className="project1-intro-box">
          <div className="project1-intro">
            <h4 className="h4-project">
              This Portfolio - Aira Allyzon Claveria
            </h4>
            <p className="p-project">
              The site features a clean, modern layout with intuitive
              navigation, allowing visitors to easily explore completed works
              and gain insights into my design approach. Emphasizing creativity
              and functionality, the portfolio highlights key achievements and
              skills, while offering a seamless user experience across all
              devices.
              <br />
              <br />
              <i>
                Just click the image prototype below and it will lead you to the
                design file.
              </i>
            </p>
            <h4 className="h4-project">Objectives</h4>
            <p className="p-project">
              The objective of this portfolio website is to create a
              professional and visually appealing platform that effectively
              showcases a diverse range of web design and UI/UX projects. The
              website aims to highlight my skills and creativity, offering
              potential clients and employers an easy-to-navigate, engaging
              experience that reflects her expertise and design philosophy.
            </p>
          </div>
          <img
            src="../projects/project1/portfolio-intro-img.svg"
            alt="project1-image"
          />
        </div>

        {/* Design Process */}
        <div className="design-process">
          <img
            src="../projects/project1/design-process.svg"
            alt="back-button-icon"
            className="process-image"
          />
        </div>

        <a
          href="https://www.figma.com/design/RLSfvayjUiDCX9DN7HvzbU/2024---AAC-Portfolio?node-id=0-1&t=sALeXY8YDIcg6CDR-1"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <div className="prototype">
            <h5 className="h5-project">UI Design Prototype</h5>
            <img
              src="../projects/project1/project3-intro-img.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </div>
        </a>

        <div className="conclusion">
          <h5 className="h5-project">Conclusion</h5>
          <p className="conclusion-text">
            This portfolio website presents my design expertise and creativity,
            providing a compelling and user-friendly platform.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project3;
