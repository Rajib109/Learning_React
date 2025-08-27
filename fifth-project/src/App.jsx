import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false); // 👈 new state for "Copied!"
  const passwordRef = useRef(null);

  // Password generator function
  const passwordGenerator = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) chars += "0123456789";
    if (character) chars += "!@#$%^&*()_+";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  }, [length, number, character]);

  // Generate password whenever settings change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // Copy to clipboard
  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
    passwordRef.current.setSelectionRange(0, password.length); // Mobile support
    setCopied(true); // 👈 show "Copied!"
    setTimeout(() => setCopied(false), 1500); // 👈 hide after 1.5s
  }, [password]);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 p-6">
      <div className="flex gap-2 relative">
        <input
          type="text"
          className="input w-64 border p-2"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="btn border px-3 py-1 bg-blue-500 text-white rounded"
          onClick={copyPassword}
        >
          Copy
        </button>
        {/* ✅ "Copied!" floating message */}
        {copied && (
          <span className="absolute -top-6 right-0 text-green-600 text-sm">
            Copied!
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label>Password Length: {length}</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="number"
          checked={number}
          onChange={() => setNumber((prev) => !prev)}
        />
        <label htmlFor="number">Include Numbers</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="character"
          checked={character}
          onChange={() => setCharacter((prev) => !prev)}
        />
        <label htmlFor="character">Include Special Characters</label>
      </div>
    </div>
  );
}

export default App;
