import { useState } from "react";
import Data from "./Data.jsx";
import "./App.css";

function App() {
  const [items, setItems] = useState(Data);
  const [showText, setShowText] = useState({});

  const handleToggle = (id) => {
    // Toggle showing full text for a specific item
    setShowText((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleRemove = (id) => {
    // Remove an item based on its ID
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
const refresh=()=>{
  setItems(Data)
}
  return (
    <div className="tours">
      <div className="refresh">
        <button className="btn" onClick={refresh}>refresh</button>
      </div>
      <div className="toursAlign">
        {items.map(({ id, img, name, text, btn, read, price }) => (
          <div className="section" key={id}>
            <div className="money">
              <span>{price}</span>
            </div>
            <article className="center">
              <img src={img} className="img" alt={name} />
              <h3>{name}</h3>
              <p>{showText[id] ? text : text.substring(0, 100) + '...'}</p>
              <span onClick={() => handleToggle(id)} className="read">
                {read}
              </span>
              {showText[id] && <p className="show">{text}</p>}
            </article>
            <article>
              <button className="btns" onClick={() => handleRemove(id)}>
                {btn}
              </button>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;