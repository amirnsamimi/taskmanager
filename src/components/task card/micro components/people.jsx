import React from "react";
import "./people.style.scss";
import PersonIcon from "@mui/icons-material/Person";
import Face3Icon from "@mui/icons-material/Face3";
const People = (props) => {
  return (
    <div className="forallpeople">
      <div className="orangebg">{props.p1}</div>
      <div className="pinkbg">{props.p2}</div>
      <div className="bluebg">{props.p3}</div>
      <div className="greenbg">{props.p4}</div>
    </div>
  );
};

export default People;
