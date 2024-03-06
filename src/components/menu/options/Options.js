import React from "react";
import "./options.style.css";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

function Options() {
  return (
    <ul className="menu">
        <h4>Options</h4>
      <li className="border">
        <HomeIcon />
        <span>Home</span>
      </li>
      <li>
        <CalendarMonthIcon />
        <span>Calendar</span>
      </li>
      <li>
        <NotificationsIcon />
        <span>Notification</span>
      </li>
      <li>
        <PersonIcon />
        <span>Account</span>
      </li>
    </ul>
  );
}

export default Options;
