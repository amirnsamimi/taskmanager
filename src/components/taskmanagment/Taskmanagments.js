import React from "react";
import "./Taskmanagments.style.css";
import TaskHead from "./taskHead/TaskHead";
import Search from "./search/Search";
import Items from "./items/Items";

function Taskmanagments() {
  return (
    <div className="task-managments">
      <TaskHead />
      <Search />
      <Items />
    </div>
  );
}

export default Taskmanagments;
