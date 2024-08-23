import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project1() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">Fundraiser Page</div>
          <div className="title2">for Saving Animals</div>
        </div>
        <div className="project1-intro-box">
          <div className="project1-intro">
            <h4 className="h4-project">A Fundraiser Page For Saving Animals</h4>
            <p className="p-project">
              Fundraiser Page UI/UX Design prioritizes simplicity,
              accessibility, and emotional engagement to effectively drive
              donations for animal welfare. The layout features intuitive
              navigation, clear call-to-action buttons, and visually compelling
              elements. Emphasis is placed on creating a seamless donation
              process, ensuring users can contribute effortlessly and securely.
              <br />
              <br />
              <i>
                Just click the images below and it will lead you to their design
                files.
              </i>
            </p>
            <h4 className="h4-project">Objectives</h4>
            <p className="p-project">
              Design an engaging and user-friendly fundraiser page to solicit
              donations for animal welfare. The page will feature impactful
              stories, compelling images, and a seamless donation process to
              maximize user engagement and contributions.
            </p>
          </div>
          <img
            src="../projects/project1/Fundraiser-Intro-IMG.svg"
            alt="project1-image"
            className="project1-image"
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

        <div className="sketching-planning">
          <h5 className="h5-project">Sketching and Planning</h5>
          <img
            src="../projects/project1/sketching-planning.svg"
            alt="back-button-icon"
            className="process-image"
          />
        </div>

        <a
          href="https://www.figma.com/design/jdJtEKHiXVMaij0bRq03Gu/Fundraiser-Page-Animals?node-id=0-1&t=HjUZ5mcLAqdZ0gK7-1"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="wireframe">
            <h5 className="h5-project">Wireframe</h5>
            <img
              src="../projects/project1/wireframe.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </div>
        </a>

        <a
          href="https://xd.adobe.com/view/ad2beb8f-b0a6-409e-bb21-4b8219c46585-f878/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="prototype">
            <h5 className="h5-project">UI Design Prototype</h5>
            <img
              src="../projects/project1/prototype.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </div>
        </a>

        <div className="conclusion">
          <h5 className="h5-project">Conclusion</h5>
          <p className="conclusion-text">
            In conclusion, our Fundraiser Page UI/UX Design is crafted with the
            utmost care and consideration to effectively advocate for animal
            welfare. By combining intuitive navigation, compelling visuals, and
            a seamless donation process, we've created an engaging platform that
            empowers users to make a tangible difference in the lives of animals
            in need. Through this design, we aim to inspire empathy, foster
            community support, and ultimately drive increased contributions
            towards the care, rescue, and rehabilitation of our beloved animal
            companions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project1;
