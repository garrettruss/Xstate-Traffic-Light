import React from "react";
import "./App.css";
import { useMachine } from "@xstate/react";
import { trafficLightMachine } from "./trafficLightMachine";

export const App = () => {
  // Typescript will infer what current and send are here
  // And will provide useful information about usage
  const [current, send] = useMachine(trafficLightMachine);

  return (
    <div className="container">
      <h2>Xstate Traffic Light</h2>
      <div className="pole" />
      <div className="traffic-light">
        <input
          type="radio"
          readOnly
          className="light red"
          checked={current.matches("red")}
        />
        <input
          type="radio"
          readOnly
          className="light yellow"
          checked={current.matches("yellow")}
        />
        <input
          type="radio"
          readOnly
          className="light green"
          checked={current.matches("green")}
        />
        <button onClick={() => send("NEXT")}>NEXT</button>
      </div>
    </div>
  );
};
