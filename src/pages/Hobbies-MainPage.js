import ContainerTop from "../ContainerTop";
import Navigations from "../Navigations";
import Footer from "../Footer";

export default function HobbiesMainPage() {
  return (
    <>
      <ContainerTop />
      <Navigations />
      <div className="hobbies-main-page-container">
        {/* hobby1 */}
        <div className="hobby">
          <p className="hobby-title-pink">mobile photography</p>
          <img
            src="../hobbies/hobby1.png"
            alt="hobby 1"
            className="hobby-image"
          />
        </div>
        {/* hobby2 */}
        <div className="hobby">
          <p className="hobby-title-green">learning japanese</p>
          <img
            src="../hobbies/hobby2.png"
            alt="hobby 1"
            className="hobby-image"
          />
        </div>
        {/* hobby3 */}
        <div className="hobby">
          <p className="hobby-title-green">cooking</p>
          <img
            src="../hobbies/hobby3.png"
            alt="hobby 1"
            className="hobby-image"
          />
        </div>
        {/* hobby4 */}
        <div className="hobby">
          <p className="hobby-title-pink">cleaning & organizing</p>
          <img
            src="../hobbies/hobby4.png"
            alt="hobby 1"
            className="hobby-image"
          />
        </div>
        {/* hobby5 */}
        <div className="hobby">
          <p className="hobby-title-pink">watching Anime</p>
          <img
            src="../hobbies/hobby5.png"
            alt="hobby 1"
            className="hobby-image"
          />
        </div>
        {/* hobby6 */}
        <div className="hobby">
          <p className="hobby-title-green">random designing</p>
          <img
            src="../hobbies/hobby6.png"
            alt="hobby 1"
            className="hobby-image"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
