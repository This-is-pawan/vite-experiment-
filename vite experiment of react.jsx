

const Normalcount = () => {
let count=0;
let handle=()=>{
  count=count+1
 console.log(count);
 
}

  return (
    <div>
      <h1>Normal</h1>
      <h3>count:{count}</h3>
     
 <button className='btn' onClick={handle}>click</button>
    </div>
  )
}

export default Normalcount
 // This code is a js normal code it is not change or update the value of the count in the h3 because of the handle have all varible is working as a loacal scope in it. 
// ###########################################################################################################################################################################################################

// import { useState } from "react";
// const Use = () => {
//  const [Count, setCount] = useState(0);
//  let handle=()=>{
//   setCount(Count + 1)
//  }
//   return (
//     <div>
//         <h1>use state</h1>
//         <h3>count:{Count}</h3>
//         <button onClick={handle}>INCREASE</button>
//     </div>
//   )
// }

// export default Use
import { useState } from "react";
const Use = () => {
 const [Count, setCount] = useState(0);
 
  return (
    <div>
        <h1>use state</h1>
        <h3>count:{Count}</h3>
        <button onClick={()=>setCount(Count+1)}>INCREASE</button>
        <br />
        <br />
        <button onClick={()=>setCount(0)}>RESET</button>
    </div>
  )
}

export default Use
