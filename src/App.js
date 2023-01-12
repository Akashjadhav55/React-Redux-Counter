import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inc, Dec } from "./redux";

function App() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state)

  return (
    <div className="App">
      <h1>Redux-Counter</h1>
      <div className="">
        <button onClick={ () => dispatch(Inc())} >+</button>
          <h1>{counter}</h1>
        <button onClick={() => dispatch(Dec())} >-</button>
      </div>
    </div>
  );
}

export default App;
