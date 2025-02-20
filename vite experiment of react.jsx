

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
