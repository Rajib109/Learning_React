import { useState } from "react";

function App() {
  const [color, setColor] = useState("Black");

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col"
      style={{ backgroundColor: color }}
    >
      {/* Main content (empty for now) */}
      <div className="flex-1"></div>

      {/* Footer */}
      <footer className="w-full bg-black/50 backdrop-blur-sm p-4 flex justify-center gap-4">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 rounded-lg bg-red-500 text-white shadow-md hover:scale-105 duration-200"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:scale-105 duration-200"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 rounded-lg bg-green-500 text-white shadow-md hover:scale-105 duration-200"
        >
          Green
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white shadow-md hover:scale-105 duration-200"
        >
          Black
        </button>
        <button
          onClick={() => setColor("purple")}
          className="px-4 py-2 rounded-lg bg-purple-800 text-white shadow-md hover:scale-105 duration-200"
        >
          Purple
        </button>
      </footer>
    </div>
  );
}

export default App;
