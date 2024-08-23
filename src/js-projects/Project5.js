import { Link } from "react-router-dom";
import EmailTop from "../EmailTop";
import Footer from "../Footer";

import "../css/project1.css";

function Project5() {
  return (
    <>
      <EmailTop />
      <div className="project1-container">
        <Link className="back-button-icon" to="/">
          <img src="../icons/back-button.svg" alt="back-button-icon" />
        </Link>
        <div className="project-title-box">
          <div className="title1">Doobert - Store</div>
          <div className="title2">Ecommerce Store</div>
        </div>
        <div className="project1-intro-box">
          <div className="project1-intro">
            <h4 className="h4-project">Doobert Ecommerce Store</h4>
            <p className="p-project">
              This project designs a vibrant, user-friendly eCommerce site for
              animal products. It features easy navigation, detailed product
              pages, and secure payment options, offering a seamless shopping
              experience across all devices.
              <br />
              <br />
              <i>
                Just click the image below and it will lead you to the design
                file.
              </i>
            </p>
            <h4 className="h4-project">Objectives</h4>
            <p className="p-project">
              The objective is to design a visually appealing and user-friendly
              eCommerce site that enhances the shopping experience for animal
              products, featuring intuitive navigation, detailed product
              information, and secure payment options.
            </p>
          </div>
          <img
            src="../projects/doobert-store-intro-img.svg"
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
          href="https://www.figma.com/design/IGebWhNlSjd7VUkUvIhvrR/Doobert-Store---Design?node-id=0-1&t=oZrvhWYtrUgxmBPu-1"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <div className="prototype">
            <h5 className="h5-project">UI Design Prototype</h5>
            <img
              src="../projects/Doobert-Store-Prototype.svg"
              alt="back-button-icon"
              className="process-image"
            />
          </div>
        </a>

        <div className="conclusion">
          <h5 className="h5-project">Conclusion</h5>
          <p className="conclusion-text">
            This Doobert eCommerce store website will provide an engaging and
            intuitive shopping experience, effectively showcasing a diverse
            range of animal products. With its user-friendly navigation,
            detailed product information, and secure payment options, the site
            will ensure a seamless and enjoyable experience for customers,
            ultimately enhancing satisfaction and driving sales.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project5;
