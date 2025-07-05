import { useState } from "react";
import Button from "./components/buttons";

function App() {
  const [color, setColor] = useState("#212121"); //generally ui me change krana ho toh state toh ayegi hi

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div  className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-5 py-1.5 border-2 rounded-2xl">
             {/* <button onClick={()=> setColor('red')} className="  px-5 py-2 text-2xl text-white shadow-lg rounded-xl" style={{backgroundColor: "red"}}>Red</button>            
            <button onClick={()=> setColor('Green')} className=" px-5 py-2 text-2xl text-white shadow-lg rounded-xl" style={{backgroundColor: "Green"}}>Green</button>
             <button onClick={()=> setColor('blue')} className=" px-5 py-2 text-2xl text-white shadow-lg rounded-xl" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=> setColor('olive')} className=" px-5 py-2 text-2xl text-white shadow-lg rounded-xl" style={{backgroundColor: "olive"}}>Olive</button>
            <button onClick={()=> setColor('gray')} className=" px-5 py-2 text-2xl text-black shadow-lg rounded-xl" style={{backgroundColor: "gray"}}>Gray</button>
            <button onClick={()=> setColor('yellow')} className=" px-5 py-2 text-2xl text-black shadow-lg rounded-xl" style={{backgroundColor: "yellow"}}>Yellow</button> 
            <button onClick={()=> setColor('Pink')} className=" px-5 py-2 text-2xl text-black shadow-lg rounded-xl" style={{backgroundColor: "Pink"}}>Pink</button>
            <button onClick={()=> setColor('Purple')} className=" px-5 py-2 text-2xl text-white shadow-lg rounded-xl" style={{backgroundColor: "Purple"}}>Purple</button>
            <button onClick={()=> setColor('Lavender')} className="outline-none px-5 py-2 text-2xl text-black shadow-lg rounded-xl" style={{backgroundColor: "Lavender"}}>Lavender</button>
            <button onClick={()=> setColor('White')} className="px-5  py-2 text-2xl text-black shadow-lg  rounded-xl" style={{backgroundColor: "White"}}>White</button>
            <button onClick={()=> setColor('Black')} className=" px-5 py-2 text-2xl text-white shadow-lg rounded-xl" style={{backgroundColor: "Black"}}>Black</button>  */}

            {/* itna bada baar baar likhne ki jarurat nahi component bana do */}

            <Button color="red" handleClick={() => setColor("red")} />
            <Button color="Green" handleClick={() => setColor("Green")} />
            <Button color="blue" handleClick={() => setColor("blue")} />
            <Button color="olive" handleClick={() => setColor("olive")} />

            {/* <Button color="red" handleClick={() => setColor("red")} />
            <Button color="red" handleClick={() => setColor("red")} />
            <Button color="red" handleClick={() => setColor("red")} />
            <Button color="red" handleClick={() => setColor("red")} />
            <Button color="red" handleClick={() => setColor("red")} />
            <Button color="red" handleClick={() => setColor("red")} />
            <Button color="red" handleClick={() => setColor("red")} />               */}
        </div> 
      </div>
    </>
  );
}

export default App;


// onClick (left wala) React ka event listener jaisa hai, jo button pe click hone par function call karta hai.
// handleClick ek prop hai, jo aap parent (App.jsx) se pass karte ho. Isme aap koi bhi function de sakte ho (jaise () => setColor("red")).
// Jab button pe click hota hai, to onClick={handleClick} likhne se, woh parent se aaya hua function run ho jata hai.
//onclick function ka reference mangta he isiliye callback use kiya normal use krte toh color nahi jaa pata aur color pass kr dete normal function me toh woh tabhi ke tabhi call ho jata he
