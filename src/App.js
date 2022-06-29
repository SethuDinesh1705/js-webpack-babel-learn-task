import React from "react";
import reactDOM from "react-dom";
import "./styles/indexstyle.scss";
import snacksimg from "./snacks.png";
export const Appone = () => {
  return (
    <div>
      <h1 class="com">Component 1 has snacks</h1>
      <img src={snacksimg} alt="no display" />
    </div>
  );
};

//reactDOM.render(<Appone />, document.getElementById("root"));
