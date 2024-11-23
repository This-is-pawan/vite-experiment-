import { useState } from "react";
import "./App.css";
import Scroll from "./Scroll";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isPageVisible, setPageVisible] = useState(false);

  const openSidebarOnce = () => {
    if (!isSidebarOpen) {
      setSidebarOpen(true);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const togglePageVisibility = () => {
    setPageVisible(!isPageVisible);
  };

  return (
    <>

      <section className="nav" >
        <h1>NavBar</h1>
        <ul className="under">
        <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <i className="fas fa-bars" onClick={openSidebarOnce}></i>
      </section>
      <article className={`sideBar ${isSidebarOpen ? "open" : ""}`}>
        <i className="fas fa-xmark" onClick={closeSidebar}></i>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <article className="pagesText">
          <h3>pages</h3>
          <i
            className={`fas fa-square-caret-left ${
              isPageVisible ? "s-show" : ""
            }`}
            onClick={togglePageVisibility}
          ></i>
        </article>
        <article className={`page ${isPageVisible ? "p-show" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </article>
      </article>
      <Scroll/>
    </>
  );
}

export default App;
