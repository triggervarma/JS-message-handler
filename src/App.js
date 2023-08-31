import React from "react";
import "./App.css";
import MainWindow from "./components/MainWindow";
import NewWindow from "./components/NewWindow";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Cross-Window Communication App</h1>
      <MainWindow />
      <Router>
        <Routes>
          <Route
            path="/new-window"
            element={<NewWindow heading="New Window" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
