import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const handleForm = (event) => {
    event.preventDefault();
    let user = document.querySelector("#user").value;
    let pwd = document.querySelector("#password").value;
    console.log(user, pwd);
  };

  const userRef = useRef();
  const pwdRef = useRef();

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const pwd = pwdRef.current.value;
    console.log(user, pwd);
    document.querySelector("#result_container").innerHTML =
      "Entered value is: " + user + "  " + pwd;
  };

  return (
    <>
      <div className="row m-4">
        <div className="col">
          <h3>Simple Form</h3>
          <form action="" method="post" onSubmit={handleForm}>
            <input type="text" id="user" placeholder="Enter User Name" />
            <br />
            <br />
            <input type="password" id="password" placeholder="Enter Password" />
            <br />
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="row m-4">
        <div className="col">
            <hr />
          <h3>Form with useRef</h3>
          <form action="" method="post" onSubmit={handleFormRef}>
            <input
              type="text"
              ref={userRef}
              id="userRef"
              placeholder="Enter User Name"
            />
            <br />
            <br />
            <input
              type="password"
              ref={pwdRef}
              id="passwordRef"
              placeholder="Enter Password"
            />
            <br />
            <br />
            <button>Submit with useRef</button>
            <div id="result_container"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UncontrolledComponent;
