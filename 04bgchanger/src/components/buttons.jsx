import React from "react"


function Button({color,handleClick}){
   return(
        <button 
            onClick={handleClick} 
            className="  px-5 py-2 text-2xl text-white shadow-lg rounded-xl" 
            style={{backgroundColor: color}}>
            {color}
        </button>     
   )
}

export default Button


// onClick (left wala) React ka event listener jaisa hai, jo button pe click hone par function call karta hai.
// handleClick ek prop hai, jo aap parent (App.jsx) se pass karte ho. Isme aap koi bhi function de sakte ho (jaise () => setColor("red")).
// Jab button pe click hota hai, to onClick={handleClick} likhne se, woh parent se aaya hua function run ho jata hai.
