import React from "react";
import "./items.style.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Face6Icon from "@mui/icons-material/Face6";
import Face4Icon from "@mui/icons-material/Face4";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import TaskCart from "./TaskCart";

const data = [
  {
    id: 1,
    name: "Mobile App",
    myIcon: <WhatshotIcon />,
    text: "item1",
    icons: <Face4Icon />,
  },
  {
    id: 2,
    name: "loading page",
    myIcon: <AirplanemodeActiveIcon />,
    text: "item2",
    icons: <FaceRetouchingNaturalIcon />,
  },
];
function Items() {
  return (
    <ul className="items">
      {data.map((i) => {
        return (
          <TaskCart
            key={i.id}
            icon={i.myIcon}
            projectName={i.name}
            colabs={[{ username: i.text, img: i.icons }]}
          />
        );
      })}
    </ul>
  );
}

export default Items;
