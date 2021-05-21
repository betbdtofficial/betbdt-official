import { Button } from "@material-ui/core";
import BathtubIcon from "@material-ui/icons/Bathtub";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
dotenv.config();
const BannedUser = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getBannedUser`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
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
    fetch(`https://betbdt.herokuapp.com/user/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    fetch(`https://betbdt.herokuapp.com/user/deleteBannedUser/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`https://betbdt.herokuapp.com/user/getBannedUser`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
        },
      })
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
