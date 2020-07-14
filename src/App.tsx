import React from "react";
import "./App.css";
import DefaultInfos from "./DefaultInfos";
import { Pane } from "evergreen-ui";

function App() {
  return (
    <Pane
      className="App"
      display="flex"
      justifyContent="center"
      alignItems="start"
    >
      <DefaultInfos />
    </Pane>
  );
}

export default App;
