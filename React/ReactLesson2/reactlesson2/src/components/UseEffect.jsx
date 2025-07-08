import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  function oneTimeCall() {
    console.log("This function should call with page load only");
  }
  useEffect(() => {
    oneTimeCall();
  }, []);

  function oneTimeCall2() {
    console.log(
      "This function should call with page load & with render of counter2"
    );
  }
  useEffect(() => {
    oneTimeCall2();
  }, [counter2]);

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Counter1</button>
      {counter1}
      <br />
      <br />
      <button onClick={() => setCounter2(counter2 + 1)}>Counter2</button>
      {counter2}
    </div>
  );
};

export default UseEffect;
