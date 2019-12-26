import React from "react";
import Header from "./component/common/header.jsx";
import "./style/App.css";
import Route from "./route/route.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route />
    </React.Fragment>
  );
}

export default App;
