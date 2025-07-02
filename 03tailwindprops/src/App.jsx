import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let newArr=[1,23,12]
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 w-2rounded-2xl  border-4">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="Screenshot 2025-07-02 222458.png"
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
      <Card username="chai aur code" />
      <Card variable="kd4dev"/>
    </>
  );
}

export default App;
