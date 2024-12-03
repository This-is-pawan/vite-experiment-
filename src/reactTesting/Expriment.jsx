import React, { useState } from 'react';
import '/src/index.css';

const Expriment = () => {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setItem(val);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(item);
  // };

  return (
    <div>
     <h2 style={{textAlign:'center', letterSpacing:'2px'}}>simple 
      Typinging 
     </h2>
      <article className='align'>
       
        <input
          type="text"
          id='input'
          className='inputLenght'
          value={item}
          onChange={handleChange}
        />
        
      </article>
      <article className='pra'>
      <span>
        {item}
      </span>
      </article>
    </div>
  );
};

export default Expriment;
