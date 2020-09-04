import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./Header";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const updateFeedback = (event) => {
    const updater = {
      Good: () => setGood(good + 1),
      Neutral: () => setNeutral(neutral + 1),
      Bad: () => setBad(bad + 1),
    };
    return updater[event.target.name]();
  };

  return (
    <main>
      <Header />
      <section>
        <Button name="Good" handleClick={updateFeedback} />
        <Button name="Neutral" handleClick={updateFeedback} />
        <Button name="Bad" handleClick={updateFeedback} />
      </section>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
