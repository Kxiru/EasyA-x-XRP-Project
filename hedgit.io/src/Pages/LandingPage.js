import graph from "../Images/graph.jpg";

export default function LandingPage() {
  return (
    <div className="App-header">
      <div className="section1">
        <div className="section1-1">
          <img className="section-images" src={graph} />
        </div>
        <div className="section1-2">
          <h3>Hedging solutions for retail investors</h3>
        </div>
      </div>
    </div>
  );
}
