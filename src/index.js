import React, { useState } from "react";
import reactDOM from "react-dom";
import "./styles/indexstyle.scss";
import { Appone } from "./App";
import { _componentName3 } from "./componentthree";

import { _componentName2 } from "./componenttwo";
const App = () => {
  const [active, setactive] = useState("Firstcomponent");

  return (
    <>
      <div class="buttonrender">
        <button onClick={() => setactive("Firstcomponent")}>Component1</button>
        <button onClick={() => setactive("Secondcomponent")}>component2</button>
        <button onClick={() => setactive("Thirdcomponent")}>component3</button>
      </div>
      <div class="content">
        {active === "Firstcomponent" && <Appone />}
        {active === "Secondcomponent" && <_componentName2 />}
        {active === "Thirdcomponent" && <_componentName3 />}
      </div>
    </>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
