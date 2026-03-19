import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // -->destructuring

  const arr = useState(0);
  const a = arr[0];
  const b = arr[1];

  //array is contstant but value at index can change
  //[0,setterFunction]
  //[1,setterFunction]
  //[2,setterFunction]

  //after that this 0,1,2 is assigned to a and b
  // Yeh purana wala a nahi hai! Yeh function dubara chala hai,
  // isliye ek bilkul brand new const a banta hai, 
  // jiski value is baar 1 hoti hai. Purana wala a memory se gayab (garbage collect) ho jata hai.

  return (
    <>
      <h1>Hi kedar</h1>
      <button
        onClick={() => {
          console.log({count});
          setCount(count + 1);
        }}
      >
        counter {count}
      </button>
      <button onClick={() => b(a + 1)}>counter {a}</button>
    </>
  );
}

export default App;
