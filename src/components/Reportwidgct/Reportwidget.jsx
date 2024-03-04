import React from "react";
import "./Reportwidget.css";
import ReportCard from "../reportCard/ReportCard";
import { AccessAlarm, Done, MonetizationOn } from "@mui/icons-material";

export default function Reportwidget() {
  return (
    <div>
      <div className="Reportwidget">
        <ReportCard icon={<AccessAlarm />} variable={"hours"} amount={124} />
        <ReportCard
          icon={<MonetizationOn />}
          variable={"Part"}
          amount={"$2.4K"}
          div
        />
      </div>
        <div className="buttom-div">
          <Done />
          <p>30 Tock Done</p>
          <p>part</p>
        </div>
    </div>
  );
}
