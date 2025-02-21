

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
// ##############################
// Here is the code of the react usestate
// ##################################
import { useState } from "react";
import Data from "./Data";
const UstateProject = () => {
  // console.log(Data);

  const [Add, setAdd] = useState(Data);

  
  const Adding = (id) => {
    // console.log("there is a button of Adding");

    setAdd(Add.filter((user)=>{
     console.log(user.id!==id);
     
     return user.id===id
    }));
  };
  let Removing = () => {
    // console.log("there is a button of Removing");
    setAdd([]);
  };
  return (
    <div>
      <h1>To do functionality by Use state</h1>
      <div className="Form">
        <input
          type="text"
          className="user"
          name="user"
          placeholder="to do app "
        />
       
        {Add.map((item) => {
          return <div className="main" key={item.id}>
            <p className="adding">{item.color}</p>
            <p className="removing">{item.name}</p>
            <p className="removing">{item.price}</p>
            <button className="btn" onClick={()=>Adding(item.id)}>
          Add
        </button>
        <button className="btn" onClick={Removing}>
          Remove
        </button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default UstateProject;
// ###############################################################################
// work of use effect  in the vite react jsx
// $$$$$$$$$$$$$$$$$$$$$$
// its work properly
const Click () => {
  const [add ,setadd]=useState(0)
  return (
    <>
    settimeout((current)=>{
      console.log(current+1)
    })
    </>
  )
}












