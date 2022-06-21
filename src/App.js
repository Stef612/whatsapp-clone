import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
