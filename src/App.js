import { useEffect, useState } from "react";
import { getUsers ,  deleteUser} from "./apiMethods";
import "./styles.css";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data.data);
    }

    fetchData();
  }, []);

  const searchHandler = (e) => {
      setSearch(e.target.value);
  }

  const filteredUsers = users.filter(user => {
    return user.first_name.toLowerCase().includes(search.toLowerCase());
  });

const deleteHandler = async (id) => {
  const data = await deleteUser(id);
  setUsers(users.filter(user => user.id !== id));
}


  return (
    <div className="App">
      <input type="text" placeholder="Search" value={search} onChange={searchHandler} />
      <div>
        {
          users.length ?
            filteredUsers.map(user => {  
              return (
                <div key={user.id} >
                  <h3>{user.first_name}</h3>
                  <h3>{user.last_name}</h3>
                  <p>{user.email}</p>
                  <img src={user.avatar} alt="avatar" />
                  <button onClick={()=>deleteHandler(user.id)}>Delete</button>
                </div>

              )
            }) 
            :
            <h1>Loading...</h1>
        }
      </div>
    </div>
  );
}

export default App;
