import { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./Nav";

function App() {
   const radom=Math.floor(Math.random()*5438)
  const [Color,setColor]=useState(`#${radom}`)
   useEffect(()=>{
setColor(Color)
   },[Color])
   return(
    <>
    <Nav Color={Color}/>
    <br></br>
    <button className="btn" onClick={()=>{setColor(`#${radom}`)}}>random color</button> 
    </>
   )
}
 
export default App;
