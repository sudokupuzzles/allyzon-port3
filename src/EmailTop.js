import { Link } from "react-router-dom";

function EmailTop() {
  return (
    <div class="top-container">
      <Link to="/" className="top-email-box link">
        <img src="./imgs/email-home.svg" alt="icon" />
        airaclaveria21@gmail.com
      </Link>
    </div>
  );
}

export default EmailTop;
