
import "./App.css";
import { CheckBox } from "./reactTesting/01.checkbox";

// const url = "https://dummyjson.com/users";

function App() {
  return (
      <>
    <CheckBox/>
    </>
  )
  // const [users, setUsers] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setUsers(data.users);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value.toLowerCase());
  // };

  // const filteredUsers = users.filter(
  //   (user) =>
  //     user.firstName.toLowerCase().includes(searchTerm) ||
  //     user.lastName.toLowerCase().includes(searchTerm)
     
  // );

  // return (
  //   <>
  //     <section className="inputAlign">
  //       <input
  //         type="text"
  //         className="input"
  //         id="input"
  //         onChange={handleSearch}
  //         placeholder="Search user details by Name"
  //       />
  //       <i className="fas fa-search"></i>
  //     </section>
  //     <section className="main">
  //       {filteredUsers.length > 0 ? (
  //         filteredUsers.map((user) => (
  //           <div key={user.id} className="box">
  //             <h3>
  //               {user.firstName} {user.lastName}
  //             </h3>
  //             <img src={user.image} alt={`${user.firstName}'s profile`} />
  //             <p>Email: {user.email}</p>
  //             <p>Age: {user.age}</p>
  //             <span>City: {user.address.city}</span>
  //           </div>
  //         ))
  //       ) : (
  //        <section>
  //           <article className="no-results">
  //         <p>Sorry, no users match your search.</p>
  //           </article>
  //         </section>
  //       )}
  //     </section>
  //   </>
  // );
}

export default App;
