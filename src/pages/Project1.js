import EmailTop from "../EmailTop";

export default function Project1() {
  return (
    <div className="project1-container">
      <EmailTop />
      <div className="back-button-icon">
        <img src="../imgs/arrow-project-icon.svg" alt="back-button-icon" />
      </div>
      <div className="project1-title">
        <div className="title1">Fundraiser Page</div>
        <div className="title2">for Saving Animals</div>
      </div>
      <div className="project1-intro-box">
        <div className="project1-intro"></div>
        <img src="" alt="project1-image" />
      </div>
    </div>
  );
}
