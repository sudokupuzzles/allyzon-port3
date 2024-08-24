import ContainerTop from "./ContainerTop";
import Navigations from "./Navigations";
import Footer from "./Footer";

export default function AboutMeMainPage() {
  return (
    <>
      <ContainerTop />
      <Navigations />
      <div className="about-me-main-page">
        <div>
          <img
            src="imgs/me-beach.svg"
            alt="about-me-picture"
            className="ako-pic"
          />
        </div>
        <div className="about-me-description">
          <h4 className="about-me-h4">
            I’m Aira, a UI/UX Designer | Front-end Developer from the heart of
            Metro Manila.
          </h4>
          <p className="about-me-p-desc">
            I’ve spent the past 5+ years working across different areas of
            design: front-end development, email design and some software web
            designs. But I've been really into designing and front-end
            development since I was a teen. Im a graduate of a Bachelor of
            Computer Science in 2022 but started working since I was in my 2nd
            year college.
          </p>
          <p className="about-me-p-desc">
            These days, I spent my time improving myself. I try to learn more
            things about coding and designing, learning a new language and
            improving my eating habits.
          </p>
          <p className="about-me-p-desc">
            Outside of work, I like cooking, walking, learning a new language,
            organizing and taking pictures of sceneries. This picture on the
            left is me. Enjoying our beautiful public beach :)
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
