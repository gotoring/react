import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  //변수처럼 값을 저장할 필요가 있는 변수, 단 ui에 보일 필요가 없는 얘들
  console.log("render");
  let count = 0;
  return (
    <div>
      <div> state: {stateCount} </div>
      <div> 변수 : {count}</div>
      <div> ref: {refCount.current}</div>
      <button onClick={() => setStateCount((prev) => prev + 1)}>
        state up
      </button>

      <button
        onClick={() => {
          count++;
          console.log("변수", count);
        }}
      >
        변수 up
      </button>
      <button
        onClick={() => {
          refCount.current++;
          console.log("ref", refCount);
        }}
      >
        ref up
      </button>
    </div>
  );
}

export default App;
