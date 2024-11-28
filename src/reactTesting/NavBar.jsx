import  { useState, createContext } from "react";
import { NavLinks } from "./NavLink";


export const Navbar = () => {
  const [user, setUser] = useState({ name: "non" });

  const logout = () => {
   
    setUser({ name: "guest" });
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div>
        <div className="nav">
          <h5>CONTEXT API</h5>
          <NavLinks user={user} logout={logout} />
        </div>
      </div>
    </NavbarContext.Provider>
  );
};
