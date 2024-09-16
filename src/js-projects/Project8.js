import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project8() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">AI Animal Bio</div>
          <div className="title2">Generator (New)</div>
        </div>
        <div className="project1-intro-box">
          <div className="project1-intro">
            <h4 className="h4-project">AI Animal Bio Generator</h4>
            <p className="p-project">
              Our AI Animal Bio Generator project features a user-friendly
              interface that allows users to easily input animal data and
              generate detailed bios in seconds. The clean, minimalist design
              ensures intuitive navigation, while playful elements enhance user
              engagement. This UI/UX focuses on providing a seamless experience,
              balancing functionality with a visually appealing aesthetic to
              cater to both casual and professional users.
            </p>
            <br />
            <h4 className="h4-project">Objectives</h4>
            <p className="p-project">
              The objective of the AI Animal Bio Generator is to create a
              streamlined, intuitive interface that allows users to input animal
              data effortlessly and generate bios quickly. The design enhances
              engagement with playful yet professional elements, while ensuring
              accessibility and responsiveness across devices. Using AI, the
              platform delivers accurate and creative bios in seconds, catering
              to a wide range of users.
            </p>
          </div>

          <img src="../projects/ai-animal-bio1-svg.svg" alt="project1-image" />
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
            src="../projects/AI-animal-bio-sketch.svg"
            alt="back-button-icon"
            className="process-image"
          />
        </div>

        <a
          href="https://xd.adobe.com/view/74b685c4-47d5-412e-a1ca-7063a1625d14-21e5/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <div className="prototype">
            <h5 className="h5-project">UI Design Prototype</h5>
            <img
              src="../projects/AI Animal Bio - Prototype.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </div>
        </a>
        <a
          href="https://xd.adobe.com/view/74b685c4-47d5-412e-a1ca-7063a1625d14-21e5/"
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

        <div className="conclusion">
          <h5 className="h5-project">Conclusion</h5>
          <p className="conclusion-text">
            In conclusion, the AI Animal Bio Generator successfully combines
            intuitive design, playful elements, and advanced AI technology to
            provide users with a seamless experience for generating creative and
            accurate animal bios. Its accessibility and responsiveness across
            devices make it a versatile tool for both casual and professional
            users, ensuring that high-quality bios are delivered efficiently and
            effortlessly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project8;
