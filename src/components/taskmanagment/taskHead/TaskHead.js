import React from "react";
import "./taskHead.style.css";
import AddIcon from "@mui/icons-material/Add";

function TaskHead() {
  return (
    <div className="task-head">
      <h3>Your task today</h3>
      <div className="add">
        <AddIcon className="icon" />
        <span>Add New Task</span>
      </div>
    </div>
  );
}

export default TaskHead;
