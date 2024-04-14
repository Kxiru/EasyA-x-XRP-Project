import Accordion from "../Components/Accordion";
import graph from "../Images/Single Line Graph.png";
import { accordionData } from "../utils/content";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [stocks, setStocks] = useState([
    { name: "Apple Inc.", symbol: "AAPL", shares: 0, price: 0 },
    { name: "Amazon.com, Inc.", symbol: "AMZN", shares: 0, price: 0 },
    { name: "Microsoft Corporation", symbol: "MSFT", shares: 0, price: 0 },
    { name: "Alphabet Inc.", symbol: "GOOGL", shares: 0, price: 0 },
    { name: "Facebook, Inc.", symbol: "FB", shares: 0, price: 0 },
  ]);

  const buyStock = (symbol, amount) => {
    setStocks(
      stocks.map((stock) =>
        stock.symbol === symbol
          ? { ...stock, shares: stock.shares + amount }
          : stock
      )
    );
  };

  const sellStock = (symbol, amount) => {
    setStocks(
      stocks.map((stock) =>
        stock.symbol === symbol
          ? { ...stock, shares: stock.shares - amount }
          : stock
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(
        stocks.map((stock) => ({
          ...stock,
          price: Math.random() * 1000,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [stocks]);

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

        <h3>Quick Trader</h3>
        <div className="section">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Shares</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.symbol}>
                  <td>{stock.name}</td>
                  <td>{stock.symbol}</td>
                  <td>${stock.price.toFixed(2)}</td>
                  <td>{stock.shares}</td>
                  <td>
                    <button
                      className="currency-button"
                      style={{ backgroundColor: "#89f1f3", color: "#121212" }}
                      onClick={() => buyStock(stock.symbol, 1)}
                    >
                      Buy
                    </button>
                    <button
                      className="currency-button"
                      onClick={() => sellStock(stock.symbol, 1)}
                    >
                      Sell
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Portfolio</h3>
        <div className="section">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Symbol</th>
                <th>Shares</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {stocks
                .filter((stock) => stock.shares > 0)
                .map((stock) => (
                  <tr key={stock.symbol}>
                    <td>{stock.name}</td>
                    <td>{stock.symbol}</td>
                    <td>{stock.shares}</td>
                    <td>${(stock.shares * stock.price).toFixed(2)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* <h3>Investments</h3>
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
        </div> */}
      </div>
    </div>
  );
}
