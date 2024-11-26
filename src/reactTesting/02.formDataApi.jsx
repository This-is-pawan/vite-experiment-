import { useState } from "react";
// import "./index.css"; 

export const DataAPI = () => {
  const [value, setValue] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupClass, setPopupClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);

    
    if (!newUser.name ) {
      setPopupMessage("Error: Please fill out all fields correctly!");
      setPopupClass("error");
    } else {
      setPopupMessage("Form has been successfully submitted!");
      setPopupClass("success");
      setValue(value + 1);
      e.currentTarget.reset();
    }

    
    setIsPopupVisible(true);

    
    setTimeout(() => setIsPopupVisible(false), 3000);
  };

  return (
    <div>
 
      {isPopupVisible && (
        <div className={`popup ${popupClass} transition`}>
          <article className="pop-align">
            <i
              className={
                popupClass === "success"
                  ? "fas fa-circle-check popup-show"
                  : "fas fa-circle-exclamation"
              }
            ></i>
            <p>{popupMessage}</p>
          </article>
        </div>
      )}

   
      <div className="main">
        <h1>Form Data API</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
