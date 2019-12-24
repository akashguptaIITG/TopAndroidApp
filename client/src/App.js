import React from "react";
import Header from "./component/common/header.jsx";
import Home from "./component/home/home";
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
