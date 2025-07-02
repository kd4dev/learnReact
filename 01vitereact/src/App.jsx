import Chai from "./chai"

function App() {
  const username='Game of Thrones'
  return (
    // <h1>wasndkjn</h1> ye hum jsx me nahi kr skte we can only do single element,toh
    //ek div banake ya empty tag banake usme jitna chahe utna kro export/import  
    <div>
      <Chai/>
      <p>Lorem ipsum {username}dolor sit amet consectetur, adipisicing elit. Sint illum dolore rem ut cum at qui dignissimos eum cupiditate, fugit expedita quam error, similique accusantium. Itaque reprehenderit perspiciatis natus qui placeat vero odit quo.</p>
      </div>
      //or <> iske andar bhi kr skte he div likhane ki jarurat nahi he</>
  )
}

export default App


//{variables} curly braces me likha hua sab kuch as a variable count hota he
//ise kehte he expression/evaluated expression {} iske andar hum direct final outcome hi likhate he
