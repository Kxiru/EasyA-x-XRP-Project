export default function Dashboard() {
  const investmentslist = ["apple"];

  return (
    <div className="App-header">
      <div className="dashboard">
        <h3>Hello, User!</h3>
        <p>[Insert date here]</p>
        <hr />

        <h3>Portfolio</h3>
        <div className="currency-selector">
          <div className="currency-button">
            <h4>USD</h4>
          </div>
          <div className="currency-button">
            <h4>XRP</h4>
          </div>
          <div className="currency-button">
            <h4>GBP</h4>
          </div>
        </div>
        <div className="section">
          <p>Graph goes here</p>
        </div>

        <h3>Investments</h3>
        <div className="section">
          <div></div>
        </div>
      </div>
    </div>
  );
}
