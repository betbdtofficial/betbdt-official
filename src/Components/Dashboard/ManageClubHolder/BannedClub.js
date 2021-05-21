import { Button } from "@material-ui/core";
import BathtubIcon from "@material-ui/icons/Bathtub";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
dotenv.config();
const BannedClub = () => {
  const [bannedClub, setBannedClub] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getBannedClub`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBannedClub(data));
  }, [bannedClub._id]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleBanned = (data, id) => {
    const clubData = {
      name: data?.name,
      country: data?.country,
      club: data?.club,
      number: data?.number,
      sponsor: data?.sponsor,
      username: data?.username,
      password: data?.password,
      password2: data?.password2,
      profit: data?.profit,
      balance: data.balance,
    };
    fetch(`https://betbdt.herokuapp.com/user/createClubHolder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(clubData),
    })
      .then(() => {
        fetch(`https://betbdt.herokuapp.com/user/getBannedClub`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setBannedClub(data));
      })
      .catch((err) => {
        console.log(err.message);
      });

    // delete banned club
    fetch(`https://betbdt.herokuapp.com/user/deleteBannedClub/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`https://betbdt.herokuapp.com/user/getBannedClub`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setBannedClub(data));
    });
  };
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Banned Club Holder</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            placeholder="Type Username..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Mobile</th>
          <th>Profit</th>
          <th>Details</th>
        </tr>
        {bannedClub
          .filter((value) => {
            if (searchTerm == "") return value;
            else if (
              value.username.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return value;
          })
          .map((data) => (
            <tr key={data._id}>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.number}</td>
              <td>{data.profit} %</td>
              <td>
                <span>
                  <Button
                    onClick={() => handleBanned(data, data._id)}
                    color="primary"
                    variant="contained"
                  >
                    <span>
                      <BathtubIcon className="viewIcon" />
                    </span>{" "}
                    Re-Active
                  </Button>{" "}
                </span>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default BannedClub;
