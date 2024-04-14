import graph from "../Images/graph.jpg";

export default function LandingPage() {
  return (
    <div className="App-header">
      <div className="section">
        <div>
          <img style={{ width: "150px" }} src={graph} />
        </div>
        <div>
          <h3>Hedging solutions for retail investors</h3>
        </div>
      </div>
    </div>
  );
}
