import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./UserDetails.css";
const UserDetails = () => {
  const { userId } = useParams();

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data))
      .catch((err) => console.log(err));
  }, [userId]);

  const {
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
  } = userDetails;

  let history = useHistory();

  return (
    <div>
      <button className="btn" onClick={() => history.goBack()}>Back</button>
      <div className="flex_style">
        <div className="content">
          <h1>
            Name: <small>{name}</small>
          </h1>
          <h3>
            User Name: <small>{username}</small>
          </h3>
          <h3>
            Email: <small>{email}</small>
          </h3>
          <h3>
            Address &#8595;
            {
              <small>
                <ul>
                  <li>Street: {address?.street}</li>
                  <li>Suite: {address?.suite}</li>
                  <li>City: {address?.city}</li>
                  <li>Zipcode: {address?.zipcode}</li>
                  <li>
                    Geo:
                    <small>
                      <ol>
                        <li>lat: {address?.geo?.lat}</li>
                        <li>lng: {address?.get?.lng}</li>
                      </ol>
                    </small>
                  </li>
                </ul>
              </small>
            }
          </h3>
          <h3>Phone: {phone}</h3>
          <h3>
            Website:{" "}
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </h3>
          <h3>Company: {company?.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
