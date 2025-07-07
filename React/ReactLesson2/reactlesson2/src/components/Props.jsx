import React from "react";
import PersonalInfo from "./PersonalInfo";
import ProffInfo from "./ProffInfo";

const Props = () => {
  let studName = "Satyam";
  let studAge = 28;
  let studEmail = "satyam@me.in";
  let studMob = "+91-9876567897";
  let studLinkedin = "www.linkedin.comsatyam";

  return (
    <>
      <div className="container">
        <div className="row  mt-4">
          <PersonalInfo
            name={studName}
            age={studAge}
            email={studEmail}
            mob={studMob}
            linkedIn={studLinkedin}
          />
          <ProffInfo name="xyz" />
        </div>
      </div>
    </>
  );
};

export default Props;
