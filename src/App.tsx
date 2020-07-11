import React from "react";
import "./App.css";
import DefaultInfos from "./DefaultInfos";
import { Pane } from "evergreen-ui";

function App() {
  return (
    <div className="App">
      <Pane display="flex" alignItems="start" clearfix>
        <DefaultInfos />
      </Pane>
    </div>
  );
}

export default App;
