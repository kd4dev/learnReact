import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "`~!@#$%^&*()-=_+[]{};':,.<>/?|";
    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl bg-gray-950 mt-16 px-6 py-8">
      <h1 className="text-white text-center mb-8 text-3xl font-bold tracking-wide">
        Password Generator
      </h1>
      <div className="w-full my-6 flex items-center">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-4 bg-amber-50 text-gray-950 px-4 text-2xl text-center rounded-lg shadow-inner"
            placeholder="Password"
            readOnly
          />
          <button
              className="ml-3 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg shadow transition-all duration-200 active:scale-95">
              Copy
          </button>
      </div>
      <div className="flex text-sm gap-x-2 flex-col text-white mt-4">
  <div className="flex items-center gap-x-1"> 
    <input 
      type="range"
      min={6}
      max={100}
      value={length} 
      className="cursor-pointer"
      onChange={(e) => setLength(e.target.value)}
    />
    <label className="text-orange-500 text-2xl">Length: {length}</label>
  </div>

  <div className="flex items-center gap-x-3 mt-4">
    <input
      type="checkbox"
      id="numberInput"
      checked={numberAllow}
      onChange={() => setNumberAllow((prev) => !prev)}
      className="w-5 h-5 accent-amber-400 cursor-pointer"
    />
    <label htmlFor="numberInput" className="text-lg">Include Numbers</label>

        <input
          type="checkbox"
          id="charInput"
          checked={charAllow}
          onChange={() => setCharAllow((prev) => !prev)} {/* ye callback fire kiya gaya hai kyunki jab bhi click hota hai, previous state change hoti hai */}
          className="w-5 h-5 accent-amber-400 cursor-pointer"
        />
    <label htmlFor="charInput" className="text-lg">Include Special Characters</label>
  </div>
</div>

    </div>
    </>
  );
}

export default App;

//-------------------useCallback--------------
//useCallback is a React Hook that lets you cache a function definition between re-renders.

//const cachedFn = useCallback(fn, dependencies)
//dependencies matlab woh kis kis par depend krta hr jaise is kis me numbers aur char pr jaise he woh true honge ya ek bhi true hoga
//--password change hoga
