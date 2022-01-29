import React from "react";
import { GlobalStateProvider } from "../utils/GlobalStateProvider";
import "../assets/css/App.scss";
import Layer from "./Layer";

const App = () => {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Layer />
      </GlobalStateProvider>
    </div>
  );
};

export default App;
