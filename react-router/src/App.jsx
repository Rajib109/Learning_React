import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile"

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MyApp</div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Route Definitions */}
      <main className="container mx-auto px-6 py-8">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* This route will match /users/anything */}
            <Route path="/users/:username" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
