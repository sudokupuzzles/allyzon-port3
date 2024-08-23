import Navigations from "./Navigations";
import ContainerTop from "./ContainerTop";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Hackathons from "./Hackathons";

function App() {
  return (
    <div>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <ContainerTop />
      <Navigations />
      <BottomComponents />
      <Footer />
    </div>
  );
}

function BottomComponents() {
  return (
    <div>
      <AboutMe />
      <Projects />
      <Hackathons />
    </div>
  );
}

export default App;
