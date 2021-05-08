import { Button } from "@material-ui/core";
import BathtubIcon from "@material-ui/icons/Bathtub";
import React, { useEffect, useState } from "react";
const BannedUser = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getBannedUser`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const handleActive = (id, data) => {
    const userData = {
      name: data.name,
      country: data.country,
      club: data.club,
      number: data.number,
      sponsor: data.sponsor,
      username: data.username,
      password: data.password,
      password2: data.password2,
      balance: data.balance,
    };
    fetch(`http://localhost:5000/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    fetch(`http://localhost:5000/user/deleteBannedUser/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getBannedUser`)
        .then((res) => res.json())
        .then((data) => setDbData(data));
    });
  };
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Banned User</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Banned User..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Mobile</th>
          <th>Balance</th>
          <th>Details</th>
        </tr>
        {dbData.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.number}</td>
            <td>{data.balance} BDT</td>
            <td>
              <span>
                <Button
                  color="primary"
                  onClick={() => handleActive(data._id, data)}
                  variant="contained"
                >
                  <span>
                    <BathtubIcon className="viewIcon" />
                  </span>{" "}
                  Active
                </Button>{" "}
              </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default BannedUser;
