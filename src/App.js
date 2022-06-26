import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
function App() {
  const [user, setUser] = useState(null);
  return (
    // BEM naming convention
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1>hey</h1>
                  </>
                }
              />
              <Route
                path="/rooms/:roomId"
                element={
                  <>
                    <Chat />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
