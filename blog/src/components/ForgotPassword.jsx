import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
    alert("Reset link sent to your email (check console)");
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Forgot Password</h2>

      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Send Reset Link</button>
      </form>

      <br />
      <a href="/">Back to Login</a>
    </div>
  );
}

export default ForgotPassword;
