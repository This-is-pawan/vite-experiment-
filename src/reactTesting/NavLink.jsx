import {Container} from '../reactTesting/UserContainer'
 export  const NavLinks =({user, logout})=>{
 return(
  <div className="nav-container">
   <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
   </ul>
  <Container user ={user} logout={logout} />
  </div>
 )
}
