import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./containers/Home"));

function App() {
  return (
    <div data-testid="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
