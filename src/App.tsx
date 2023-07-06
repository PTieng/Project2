import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Home/>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
