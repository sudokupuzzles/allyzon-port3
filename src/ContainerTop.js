import EmailTop from "./EmailTop";

function ContainerTop() {
  return (
    <div>
      <EmailTop />

      {/* Container 2 */}
      <div class="second-container">
        <div className="first-roww">
          <div class="first-row-1">Hello there, I'm</div>
          <div class="first-row-2">
            <img src="./imgs/arrow-down.svg" alt="icon" />
          </div>
          <div class="first-row-3">
            <div>this portfolio is coded by</div>
            <div>me from scratch using</div>
            <div>javascript, html & css</div>
          </div>
        </div>

        <div class="second-row">
          <div class="second-row-text">Aira Allyzon Claveria</div>
        </div>

        <div className="third-row">
          <div class="third-row-1">this is my portfolio</div>
          <div class="third-row-2">
            <div class="more-about-me-btn">
              <img
                src="./imgs/more-about-me-icon.svg"
                alt="icon"
                className="arrow-to-right"
              />
              More About Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerTop;
