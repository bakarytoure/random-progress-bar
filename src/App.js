import React from "react";
import "./App.scss";
import ProgressBar from "./ProgressBar";

function App() {
  const [completed, setCompleted] = React.useState(60);
  React.useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 4000);
  }, []);
  return (
    <div className="App ">
      {completed < 50 ? (
        <ProgressBar
          bgcolor="red"
          completed={completed}
          title="Please do better next time! You got "
          color="Red"
          greaterorless=" which is less than the everage 50%."
        />
      ) : (
        <ProgressBar
          bgcolor="green"
          completed={completed}
          title="Great job! You got "
          color="green"
          greaterorless=" which is greater than the average 50%."
        />
      )}
    </div>
  );
}

export default App;
