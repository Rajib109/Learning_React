import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('')   // 🔴 for popup message

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("⚠️ Please enter both username and password");
      setTimeout(() => setError(""), 3000); // auto-hide after 3 sec
      return;
    }
    setUser({ username, password });
    setError(""); // clear message on success
  };
  return (
    <div>
      <h2 className="text-2xl m-1.5">Login</h2>
      <input
        className="border border-gray-300 p-2 rounded-md m-1.5"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        className="border border-gray-300 p-2 rounded-md m-1.5"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md m-1.5"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {/* 🔴 Popup Message */}
      {error && (
        <div className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 animate-bounce">
          {error}
        </div>
      )}
    </div>
  );
}

export default Login;
