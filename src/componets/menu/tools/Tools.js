import React from "react";
import "./tools.style.css";
import SettingsIcon from "@mui/icons-material/Settings";
import SmsIcon from "@mui/icons-material/Sms";

function Tools() {
  //tools 
  return (
    <ul className="tools">
      <h4>tools</h4>
      <li className="border">
        <SettingsIcon />
        <span>Setting</span>
      </li>
      <li>
        <SmsIcon />
        <span>Chat</span>
      </li>
    </ul>
  );
}

export default Tools;
