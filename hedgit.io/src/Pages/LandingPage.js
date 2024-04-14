import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="App-header">
      <div className="big-image">
        <div class="overlay">
          <div className="textbox">
            <h1>
              Hedg<span style={{ color: "#89f1f3" }}>.it</span>
            </h1>
            <p>
              Simple and cost efficient cross currency stock investments with
              automatic hedging
            </p>
            <div className="landing-button signup">Sign up</div>
            <Link to="/getstarted">
              <div className="landing-button">Login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
