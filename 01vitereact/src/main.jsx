import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myAPP(){
  return(
    <div>
      <h1 >Custom App!</h1>              
    </div>
  )
}

// const reactElement={
//     type :'a', 
//     props : { 
//             href: 'https://google.com',
//             target : '_blank'
//     },
//     children : 'click me to visit google'
// }

//{variables} curly braces me likha hua sab kuch as a variable count hota he
//ise kehte he expression/evaluated expression {} iske andar hum direct final outcome hi likhate he

const anotherName="Chai aur react"
const anotherElement=(
  <a href="https://google.com" target='_blank'>click me to visit google</a>
)

//generally hum jab ye function return krte he tab uska aise hi object behind the scenes react banata he aur use inject kr deta he

//ye react ka structure he hamara wala object nahi chala kyunki usme hamne hamare hisab se keywords/syntax use kiya pr, ye directly use kr skte he kyunki ye react ka he  ,variable last me rehta he
const reactElement=React.createElement(
  'a',
  {href:'https://goggle.com',target:'_blank'},
  'click me to visit google',
  anotherName
)

createRoot(document.getElementById('root')).render(
  // <>
  //   <myAPP/> //  ye he toh function hi toh isse hum myApp()aise bhi likh skte he,par likhana nahi he henerally <> aise hi likha jata he</>
  //   <App />
  // </>  

 //   anotherElement 

 reactElement
)
