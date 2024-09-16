import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project7() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">Other Desigs &nbsp;&nbsp;</div>
          <div className="title2">Compilation</div>
        </div>

        {/* Design Process */}
        <div className="design-process">
          <center>
            <img
              src="../projects/design1.svg"
              alt="back-button-icon"
              className="process-image"
            />
            <br />
            <br />
            <br />
            <img
              src="../projects/design2.svg"
              alt="back-button-icon"
              className="process-image"
            />
            <br />
            <br />
            <br />
            <img
              src="../projects/design3.svg"
              alt="back-button-icon"
              className="process-image"
            />
            <br />
            <br />
            <br />
            <img
              src="../projects/design4.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project7;
