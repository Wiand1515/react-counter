import React from "react";
import reactDom from "react-dom";
import Counter from "./components/Counter";
import "./Css/fonts.css";
import "./Css/counter.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  let counter = 0;

  setInterval(() => {
    const dOne = Math.floor(counter / 1 %10),
      dTwo = Math.floor(counter / 10 % 10),
      dThree = Math.floor(counter / 100 % 10),
      dFour = Math.floor(counter / 1000 % 10),
      dFive = Math.floor(counter / 10000 % 10),
      dSix = Math.floor(counter / 100000 % 10);

    counter++;

    reactDom.render(<Counter
    one={dOne}
    two={dTwo}
    three={dThree}
    four={dFour}
    five={dFive}
    six={dSix}
    />, document.querySelector("#root"));
  }, 1000);

  return (
    <>
      <Counter />
    </>
  );
}

reactDom.render(<App />, document.querySelector("#root"));
