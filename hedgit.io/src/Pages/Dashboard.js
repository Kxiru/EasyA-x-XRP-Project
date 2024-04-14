import Accordion from "../Components/Accordion";
import graph from "../Images/Single Line Graph.png";
import { accordionData } from "../utils/content";

export default function Dashboard() {
  return (
    <div className="App-header">
      <div className="dashboard">
        <h3>Hello, User!</h3>
        <p>Sunday, April 14th</p>
        <hr style={{ borderColor: "#4C4C4C" }} />

        <h3>Portfolio</h3>
        <div className="currency-selector">
          <div
            className="currency-button"
            style={{ backgroundColor: "#89f1f3", color: "#121212" }}
          >
            <p>USD</p>
          </div>
          <div className="currency-button">
            <p>XRP</p>
          </div>
          <div className="currency-button">
            <p>GBP</p>
          </div>
        </div>

        <div className="section">
          <img src={graph} />
        </div>

        <h3>Investments</h3>
        <div className="section">
          <div className="accordion">
            {accordionData.map(
              ({ img, title, code, total, expiry, amount }) => (
                <Accordion
                  img={img}
                  title={title}
                  code={code}
                  total={total}
                  expiry={expiry}
                  amount={amount}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
