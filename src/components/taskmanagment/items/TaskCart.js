import React from "react";

function TaskCart({ icon, projectName, colabs }) {
  return (
    <>
      <li className="item">
        <div className="info">
          {icon}
          <div className="info-text">
            <h5>{projectName}</h5>
            <span>
              {colabs.map((i, index) => (
                <p key={index}>{i.username}</p>
              ))}
              {}
            </span>
          </div>
        </div>
        <div className="users">
          {colabs.map((i, index) => (
            // <img key={index} src={i.img} alt="useravatar" />
            <i key={index}>{i.img}</i>
          ))}
        </div>
        <input type="checkbox" />
      </li>
    </>
  );
}

export default TaskCart;
