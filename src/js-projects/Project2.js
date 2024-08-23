import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project2() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">Vivid Smiles</div>
          <div className="title2">Dental Clinic</div>
        </div>
        <div className="project1-intro-box">
          <div className="project1-intro">
            <h4 className="h4-project">Vivid Smiles Dental Clinic</h4>
            <p className="p-project">
              The Vivid Smiles Dental Clinic website will establish a modern,
              user-friendly online presence, enhancing patient engagement,
              streamlining appointment bookings, and building trust and
              credibility, ultimately contributing to the clinic's growth and
              success.
              <br />
              <br />
              <i>
                Just click the images below and it will lead you to their design
                files.
              </i>
            </p>
            <h4 className="h4-project">Objectives</h4>
            <p className="p-project">
              The primary objective of the Vivid Smiles Dental Clinic website is
              to create a modern, user-friendly online platform that enhances
              the clinic's online presence and reflects its high standards of
              care. The website will improve user experience through intuitive
              navigation and mobile optimization, facilitate appointment booking
              with a seamless scheduling system, and boost engagement with
              informative content and patient testimonials. Additionally, it
              will adhere to accessibility standards and utilize SEO best
              practices to increase visibility and reach a broader audience,
              ultimately building trust and credibility with both new and
              existing patients.
            </p>
          </div>
          <img
            src="../projects/project1/vivid-smiles-intro-IMG.svg"
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

        <div className="sketching-planning">
          <h5 className="h5-project">Sketching and Planning</h5>
          <img
            src="../projects/project1/Sketching and Planning - Vivid.svg"
            alt="back-button-icon"
            className="process-image"
          />
        </div>

        <div className="wireframe">
          <h5 className="h5-project">Wireframe</h5>
          <img
            src="../projects/project1/Wireframe-Vivid.svg"
            alt="back-button-icon"
            className="process-image"
          />
        </div>

        <a
          href="https://www.figma.com/design/UPg2kmXZFwXdAAq5salkMa/Vivid-Smiles---Design-2?node-id=0-1&t=6mRBTgvQvrW6KR7C-1"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <div className="prototype">
            <h5 className="h5-project">UI Design Prototype</h5>
            <img
              src="../projects/project1/Prototype-Vivid.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </div>
        </a>

        <div className="conclusion">
          <h5 className="h5-project">Conclusion</h5>
          <p className="conclusion-text">
            The Vivid Smiles Dental Clinic website project is poised to
            significantly enhance the clinic's digital presence, providing a
            modern, accessible, and engaging platform for current and
            prospective patients. By focusing on user experience, seamless
            appointment booking, and effective SEO strategies, the website will
            not only streamline clinic operations but also build trust and
            credibility within the community. This project will serve as a
            crucial tool in the clinic’s efforts to offer exceptional care and
            attract a wider audience, ensuring Vivid Smiles Dental Clinic
            remains a leader in dental health services.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project2;
