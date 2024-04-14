import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <div>
            {question} {isActive ? "-" : "+"}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <div>
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
