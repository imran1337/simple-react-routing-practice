import React from "react";
import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Home = () => {
    
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Users: {users.length}</h1>
      {users.map((user) => (
        <Friend user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Home;