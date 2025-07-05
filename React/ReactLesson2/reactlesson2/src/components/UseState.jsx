import React, { useState } from "react";

const UseState = () => {
  const [div1, setDiv1] = useState(true);
  const handleDiv1 = (flag) => {
    setDiv1(flag);
  };

  const [div2, setDiv2] = useState(true);
  const handleDiv2 = () => {
    setDiv2(!div2);
  };
  return (
    <div>
      <div className="row">
        <div className="col">
          {div1 && (
            <div style={{ backgroundColor: "green", height: "200px" }}></div>
          )}
          <button className="btn btn-primary" onClick={() => handleDiv1(true)}>
            Show
          </button>
          <button className="btn btn-danger" onClick={() => handleDiv1(false)}>
            Hide
          </button>
        </div>
        <div className="col">
          {div2 && (
            <div style={{ backgroundColor: "red", height: "200px" }}></div>
          )}
          <button className="btn btn-warning" onClick={() => handleDiv2()}>
            Toggle
          </button>
        </div>
      </div>
    </div>
  );
};
export default UseState;
