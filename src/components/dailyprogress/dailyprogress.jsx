import React from "react";
import "./dailyprogress.style.scss";
const Dailyprogress = (props) => {
  return (
    <div className="gradient">
      <div className="forcolor"></div>
      <div className="forcontent">
        <p>your daily progress</p> <br />
        <p>{props.percentage} %</p>
      </div>
    </div>
  );
};

export default Dailyprogress;
