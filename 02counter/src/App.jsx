import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(15) // array return krta he,jiska 2nd element function hota he,aur 1st variable hota he
//2nd wala jp function h
//variable ki default value 15 hogi 
//variable ke type ke hisab se default value rakhenge hum
 // let counter=5
 //setCounter callback leta he

 const addValue= () => {
  counter++
  setCounter(counter)
 }
 const removeValue= () => {
  if(counter<=0){
    console.log('cant be neg value')
    setCounter(counter=0)
  }
  else{
    setCounter(counter-1)//-->jitni barr likha he utni bar kam ho jayega
    setCounter((prevCounter) => prevCounter - 1) //ye peechali state he
     setCounter((prevCounter) => prevCounter - 1)//par ye syntax use kiya toh nahi hoga,hum agar proper call back se bataye ki aisa karo toh woh bundle nahi banata
     //wrna bina callback ke 4 baar likhate toh woh bundle banata aur sirf ek bar hota
     //par agar counter=counter-1 aisa kuch assignment wala use krte toh woh 4 bar ho jyega
     setCounter((prevCounter) => prevCounter - 1) 
  }
 }

  return (
    <>      
        <h1>chai aur react</h1>
        <h2>counter value:{counter}</h2>
        <button onClick={addValue}>Add Value:{counter}</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove Value:{counter}</button>
        <p>footer:{counter}</p>
    </>
  )
}

export default App


//ui updatation ko react  handle krta he
