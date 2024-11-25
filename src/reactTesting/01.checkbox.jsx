import { useState } from "react";

export const CheckBox = () => {
  const arr = ["react", "angular", "rust", "javascript", "css", "HTML5"];
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState("");

  const handleCheck = (e) => {
    setIsChecked(e.target.checked); 
    console.log("Checkbox checked:", e.target.checked);
  };

  const handleSelectChange = (e) => {
    setSelectedFramework(e.target.value);
    console.log("Selected framework:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:");
    console.log("Checkbox status:", isChecked);
    console.log("Selected framework:", selectedFramework);
  };

  return (
    <>
      <div className="main">
        <article className="aligning">
          <form onSubmit={handleSubmit}>
            <h1>Checkbox</h1>
            <article className="first">
              <label htmlFor="checkbox">Free Shipping</label>
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={handleCheck}
              />
            </article>
            <article className="second">
              <label htmlFor="framework">Framework</label>
              <select
                name="framework"
                id="framework"
                value={selectedFramework}
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  Select a framework
                </option>
                {arr.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </article>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </article>
      </div>
    </>
  );
};
