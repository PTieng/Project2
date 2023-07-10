import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import AppRoute from "./route/AppRoute";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppRoute />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
