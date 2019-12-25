import React from "react";
import Header from "./component/common/header.jsx";
import Home from "./container/home-container";
import "./style/App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
