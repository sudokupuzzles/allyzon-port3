import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project4() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">Community Cat</div>
          <div className="title2">Podcast Calculator</div>
        </div>
        <div className="project1-intro-box">
          <div className="project1-intro">
            <h4 className="h4-project">Community Cat Podcast Calculator</h4>
            <p className="p-project">
              The purpose of the Community Cat Calculator is to help
              organizations and individuals understand the volume of spay/neuter
              of owned cats that need to be offered in the community as well as
              trap-neuter-return cats to be successful in reducing the outdoor
              cat population. This calculation helps you put numbers into the
              concepts that are shared in the Community Cat Pyramid and will
              provide you with tangible goals.   
              <br />
              <br />
              <i>
                Just click the images below and it will lead you to their design
                files.
              </i>
            </p>
            <h4 className="h4-project">Objectives</h4>
            <p className="p-project">
              Just enter the zip code for the town where you're trying to reduce
              the free-roaming cat population and press "calculate". In a few
              seconds, the calculator will generate an estimate for your county.
              Then enter your email into the field that appears and you'll
              receive a full report with all the details you'll need to set your
              TNR and spay/neuter goals. 
            </p>
          </div>
          <img
            src="../projects/project1/community-cat-podcast-calculator.svg"
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
            src="../projects/project1/sketching-ccp.svg"
            alt="back-button-icon"
            className="process-image"
          />
        </div>

        <a
          href="https://xd.adobe.com/view/0b959aa1-8da6-47e3-ab23-2258bbd7181c-5ec6/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <div className="prototype">
            <h5 className="h5-project">UI Design Prototype</h5>
            <img
              src="../projects/project1/prototype-ccp.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </div>
        </a>

        <div className="conclusion">
          <h5 className="h5-project">Conclusion</h5>
          <p className="conclusion-text">
            This calculation is meant to be a general guidepost, not fixed in
            place. Your group can adjust these numbers based on what is
            happening locally in your area. The purpose is to help show how much
            more spay/neuter needs to be offered to cat owners to impact our
            numbers of cats needing TNR or rescue.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project4;
