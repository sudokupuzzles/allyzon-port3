import { Link } from "react-router-dom";

function Hackathons() {
  return (
    <>
      <section class="hackathons-attended">
        <div class="hackathons-container">
          <div class="hackathons-title">
            <div class="about-me-2">hackathons&nbsp;</div>
            attended
          </div>
          <div class="hack-bottom">
            <div class="hackathon-img">
              <img
                src="../imgs/hack-images.svg"
                class="project-img"
                alt="desc"
              />
            </div>
            <div class="hackathon-lists">
              <ul>
                <li>24 Hour Hackathon by Accenture Philippines</li>
                <li>Coca Cola CODE FEST 2019</li>
                <li>1st ITMS PNP Hackathon</li>
                <li>Impact Hackathon iSite Regional Programming</li>
                <li>Competition Philippine Web3 Hackathon</li>
              </ul>
              <Link class="btn-see-more link" to="/joinedevents">
                <img
                  src="../imgs/see-more-icon.jpg"
                  class="see-more-icon"
                  alt="desc"
                />
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hackathons;
