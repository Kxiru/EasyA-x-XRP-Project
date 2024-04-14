import Accordion from "../Components/Accordion";
import { accordionData } from "../utils/content";

export default function Faq() {
  return (
    <div className="App-header">
      <div className="section">
        <h3>Frequently Asked Questions</h3>
        <div>
          <div className="accordion">
            {accordionData.map(({ question, answer }) => (
              <Accordion question={question} answer={answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
