// import React from 'react'
import { nanoid } from "nanoid";
import { ReactQueryItem } from "./ReactQueryItem";
import { useState } from "react";
const defaultItems = [
  { id: nanoid(), title: "walk the dog", isDone: false },
  { id: nanoid(), title: "wash dishes", isDone: false },
  { id: nanoid(), title: "drink coffee", isDone: true },
  { id: nanoid(), title: "take a nap", isDone: false },
];
const ReactQueryApp = () => {
  const [items, setItems] = useState(defaultItems);
  // console.log(setItem);
  
  return (
    <div>
      <section className="section-center">
       
     <ReactQueryItem item={items}/>
      </section>
    </div>
  );
};

export default ReactQueryApp;
