import React from "react";
import { Link } from 'react-router-dom';

const Friend = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div
      style={{
        border: "3px solid green",
        padding: "20px",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <h1>{name}</h1>
      <h4>{email}</h4>
      <Link to={`/user/${id}`}><button>Show More Details</button></Link>
    </div>
  );
};

export default Friend;