import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import Modals from "../User/Modals";
dotenv.config();
const ClubIndex = () => {
  const [clubHolder, setClubHolder] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getClubHolder`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClubHolder(data));
  }, [clubHolder._id]);
  const [searchTerm, setSearchTerm] = useState("");
  const [uniqueUser, setUniqueUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    const findEl = clubHolder.find((data) => data._id === id);
    setUniqueUser(findEl);
  };
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
    fetch(`https://betbdt.herokuapp.com/user/bannedClub`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(clubData),
    }).then((result) => {
      console.log(result);
    });
    // club delete
    fetch(`https://betbdt.herokuapp.com/user/deleteClub/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`https://betbdt.herokuapp.com/user/getClubHolder`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setClubHolder(data));
    });
  };
  return (
    <>
      {/* modal */}
      <Modals show={show} user={uniqueUser} handleClose={handleClose} />
      {/* modal */}
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Active Club Holder</span>
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
        {clubHolder
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
                    onClick={() => handleShow(data._id)}
                    color="primary"
                    variant="contained"
                  >
                    <span>
                      <FaRegEye className="viewIcon" />
                    </span>{" "}
                    View
                  </Button>{" "}
                  <Button
                    onClick={() => handleBanned(data, data._id)}
                    color="secondary"
                    variant="contained"
                  >
                    <span>
                      <DeleteForeverIcon className="viewIcon" />
                    </span>{" "}
                    banned
                  </Button>
                </span>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default ClubIndex;
