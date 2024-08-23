import { Link } from "react-router-dom";

import ContainerTop from "./ContainerTop";
import Navigations from "./Navigations";
import Footer from "./Footer";

function MainProjects() {
  return (
    <>
      <ContainerTop />
      <Navigations />
      {/* <!-- Projects Lists --> */}
      <div class="projects-list">
        <Link class="project-pink link" to="/project11">
          <div class="project-title">Fundraiser Page for Saving Animals</div>
          <img
            src="../imgs/arrow-project-icon.svg"
            class="arrow-project-icon"
            alt="desc"
          />
          <hr />
          <div class="project-description">
            An animal rescue fundraiser with striking images and clear donation
            calls to action.
          </div>
          <img
            src="../projects/Fundraiser-Page.svg"
            class="project-img"
            alt="desc"
          />
        </Link>

        <Link class="project-white link" to="/project22">
          <div class="project-title">
            Vivid Smiles <br />
            Dental Clinic Website
          </div>
          <img
            src="../imgs/green-arrow-project-icon.svg"
            class="arrow-project-icon"
            alt="desc"
          />
          <hr />
          <div class="project-description">
            A dental clinic website with user-friendly navigation and easy
            appointment booking.
          </div>
          <img
            src="../projects/Vivid-Smiles-Project.svg"
            class="project-img"
            alt="desc"
          />
        </Link>

        <Link class="project-white link" to="/project33">
          <div class="project-title">
            This Portfolio (^_^) - <br />
            My Portfolio
          </div>
          <img
            src="../imgs/green-arrow-project-icon.svg"
            class="arrow-project-icon"
            alt="desc"
          />
          <hr />
          <div class="project-description">
            Designed and coded from scratch using Figma, HTML, CSS and
            Javascript
          </div>
          <img
            src="../projects/my-portfolio-project.svg"
            class="project-img"
            alt="desc"
          />
        </Link>

        <Link class="project-pink link" to="/project44">
          <div class="project-title">Community Cat Podcast Calculator</div>
          <img
            src="../imgs/arrow-project-icon.svg"
            class="arrow-project-icon"
            alt="desc"
          />
          <hr />
          <div class="project-description">
            The purpose is to help show how much more spay/neuter needs to be
            offered to cat owners.
          </div>
          <img
            src="../projects/Community-Cat-Podcast-Calc.svg"
            class="project-img"
            alt="desc"
          />
        </Link>

        <Link class="project-pink link" to="/project55">
          <div class="project-title">
            Doobert <br />
            Ecommerce Store
          </div>
          <img
            src="../imgs/arrow-project-icon.svg"
            class="arrow-project-icon"
            alt="desc"
          />
          <hr />
          <div class="project-description">
            Shop at Doobert eCommerce store offering quality pet supplies and
            accessories.
          </div>
          <img
            src="../projects/Doobert-Store.svg"
            class="project-img"
            alt="desc"
          />
        </Link>

        <Link class="project-white link " to="/project66">
          <div class="project-title">
            Old Projects since High School with HTML/CSS/JS
          </div>
          <img
            src="../imgs/green-arrow-project-icon.svg"
            class="arrow-project-icon"
            alt="desc"
          />
          <hr />
          <div class="project-description">
            These are my random old projects I made since high school just for
            fun
          </div>
          <img
            src="../projects/Old-Design-Projects.svg"
            class="project-img"
            alt="desc"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default MainProjects;
