import { useState } from "react";
// import "./index.css"; 

export const DataAPI = () => {
 
  return (
    <div>

      <div className="main">
        <h1>Form Data API</h1>
        <form className="form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>

      <h1>Value:0</h1>
      <button className="btn">increase</button>
    </div>
  );
};
