import { Link } from "react-router-dom";

function Navigations() {
  return (
    <>
      <div class="main-nav-container">
        <Link to="/joinedevents" className="joined-events link">
          <img src="./imgs/calendar.svg" alt="icon" />
          <br />
          joined events
        </Link>

        <Link to="/mainprojects" className="see-my-projects link">
          <span>see my projects</span>
        </Link>

        <div class="my-resume">
          <div className="link">
            <a
              href="https://drive.google.com/file/d/1NLrHSLKiHCj9R3EC7tBGD2m-2z-4CrB2/view?usp=sharing"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              <div>
                <img src="./imgs/resume-icon.svg" alt="icon" />
              </div>
              <div>my resume</div>
            </a>
          </div>
        </div>

        <div class="hobbies">
          <Link to="/hobbies" className="link">
            <div>
              <img src="./imgs/hobbies-icon.svg" alt="icon" />
            </div>
            <div>hobbies</div>
          </Link>
        </div>

        <div class="about-me">
          <Link to="/aboutmemainpage" className="link">
            <div>
              <img src="./imgs/about-me-icon.svg" alt="icon" />
            </div>
            <div>about me</div>
          </Link>
        </div>

        <div class="my-contact">
          <Link to="/contact" className="link">
            <div>
              <img src="./imgs/my-contact-icon.svg" alt="icon" />
            </div>
            <div>contact</div>
          </Link>
        </div>

        <Link to="/favproject" className="my-favorite-project link">
          <span>fav project</span>
        </Link>
      </div>
    </>
  );
}

export default Navigations;
