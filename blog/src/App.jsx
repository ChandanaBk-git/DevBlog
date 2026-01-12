import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Register</button>

      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
