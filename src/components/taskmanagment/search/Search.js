import React from "react";
import "./search.style.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

function Search() {
  return (
    <div className="search">
      <ZoomInIcon className="icon" />
      <input type="text" placeholder="search Task" />
    </div>
  );
}

export default Search;
