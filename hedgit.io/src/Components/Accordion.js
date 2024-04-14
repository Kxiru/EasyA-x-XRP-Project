import React, { useState } from "react";

const Accordion = ({ img, title, code, total, expiry, amount }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        {/* <div>{img}</div>
        <div>{title}</div>
        <div>{code}</div>
        <div>{total}</div> */}
        <div>
          {isActive ? (
            <div>
              <p>Settle</p>
            </div>
          ) : (
            <div>
              <p>Hedge</p>
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <div>
            <p>Expiry date: {expiry}</p>
            <p>Amount: {amount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
