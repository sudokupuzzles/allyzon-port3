import ContainerTop from "../ContainerTop";
import Navigations from "../Navigations";
import Footer from "../Footer";

export default function JoinedEvents() {
  return (
    <div>
      <ContainerTop />
      <Navigations />

      <div className="joinedEvents-container">
        <div className="hackathon-title-box">
          <div className="attended">Attended</div>
          <div className="hackathons">Hackathons</div>
        </div>

        <div className="hackathon-box">
          <div className="hackathon-title">24-Hour Accenture Hackathon</div>
          <div className="hackathon-laman">
            <img
              src="../joinedevents/hackathon1.svg"
              alt="hackathon1"
              className="hackathon-image"
            />
            <p className="hackathon-description">
              This was my first ever hackathon and I will never forget this
              event. Delicious foods, so many giveaways, people are nice,
              accomodation was comfortable and our opponents were all experts.
              In fact, we are the only students that time. We were just 2nd year
              college and our opponents were all professionals. Most of their
              projects were so high tech compare to ours haha. We listened
              attentively to the presentation of the top 3 winners. Their
              projects were just really jaw dropping. The supportive environment
              created by both organizers and fellow participants fostered a
              culture of collaboration and knowledge sharing, enabling us to
              overcome obstacles and achieve remarkable results. We really
              learned a lot from our opponents. I will never forget this event.
            </p>
          </div>
        </div>

        <div className="hackathon-box">
          <div className="hackathon-title-right">
            Coca Cola Code Festival 2019
          </div>
          <div className="hackathon-laman">
            <p className="hackathon-description">
              This is my second 24-hour hackathon experience. This event was
              held by the big known company, Coca-Cola. Students from different
              schools participated in this event.
              <br />
              <br />
              Our project was a Rewarding System Mobile App whereas, users will
              receive points that can be converted into cash every time they
              dispose a certain coca cola can or bottle. Presenting our projects
              to industry experts and receiving feedback was a highlight of the
              event, providing invaluable insights and validation for our
              efforts. Moreover, the opportunity to network with professionals
              from diverse backgrounds opened doors for future collaborations
              and career opportunities.
            </p>
            <img
              src="../joinedevents/hackathon2.svg"
              alt="hackathon1"
              className="hackathon-image"
            />
          </div>
        </div>

        <div className="hackathon-box">
          <div className="hackathon-title">Philippine Web3 Hackathon</div>
          <div className="hackathon-laman">
            <img
              src="../joinedevents/hackathon3.svg"
              alt="hackathon1"
              className="hackathon-image"
            />
            <p className="hackathon-description">
              Engaging in the Philippine Web3 Hackathon was a transformative
              experience that broadened my horizons in the realm of
              decentralized technologies. Teaming up with a diverse group of
              individuals infused our project with a rich tapestry of
              perspectives and expertise, fostering an environment of
              collaboration and innovation. Throughout the hackathon, I immersed
              myself in the exploration of cutting-edge Web3 tools and
              protocols, experimenting with novel ideas and pushing the
              boundaries of my technical abilities. The supportive atmosphere
              cultivated by both organizers and fellow participants fueled our
              team's creativity, leading to the development of a project that
              not only addressed real-world challenges but also showcased the
              potential of decentralized solutions.
            </p>
          </div>
        </div>

        <div className="hackathon-box">
          <div className="hackathon-title-right">
            Philippine Nat’l Police Hackathon
          </div>
          <div className="hackathon-laman">
            <p className="hackathon-description">
              This was a random participation. Our school didnt even know we
              joined here. We just saw this event on a social media. This event
              was held by ‘Philippine National Police’. Out of 33 participants,
              we got the 6th place!
              <br />
              <br />
              Here, we developed a software web app that can automate users
              registration for getting a driver’s license. Presenting our
              project to a panel of judges was a moment of pride and validation,
              highlighting the hard work and ingenuity that went into its
              creation. Moreover, the hackathon provided ample opportunities for
              networking and knowledge exchange, enabling me to forge valuable
              connections within the community and deepen my understanding of
              this rapidly evolving landscape.
            </p>
            <img
              src="../joinedevents/hackathon4.svg"
              alt="hackathon1"
              className="hackathon-image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
