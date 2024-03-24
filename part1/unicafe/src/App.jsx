import { useState } from "react";
import Header from "./components/Header";

const StatisticsLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ stat: { good, neutral, bad } }) => {
  const score = good * 1 + bad * -1 + neutral * 0;
  const all = good + bad + neutral;
  const avg = score / 3;
  const positive = (good / all) * 100;

  return (
    <>
      {all ? (
        <>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={avg} />
          <StatisticsLine text="positive" value={`${positive}%`} />
        </>
      ) : (
        <>
          <h2>statistics</h2>
          <p>No feedback given</p>
        </>
      )}
    </>
  );
};

const Button = ({ text, func }) => {
  return <button onClick={() => func((c) => c + 1)}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const title = "give feedback";
  return (
    <div>
      <Header title={title} />
      <div>
        <Button text="good" func={setGood} />
        <Button text="neutral" func={setNeutral} />
        <Button text="bad" func={setBad} />
        {/* <button onClick={() => setNeutral((c) => c + 1)}>neutral</button>
        <button onClick={() => setBad((c) => c + 1)}>bad</button> */}
      </div>
      <Statistics stat={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
