import { Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import EditModal from "./EditModal";
import Modals from "./Modals";
dotenv.config();
const Index = () => {
  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [uniqueUser, setUniqueUser] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleClose = () => {
    setShow(false);
    setShowEdit(false);
  };
  const handleShow = (id) => {
    setShow(true);
    const findEl = dbUser.find((data) => data._id === id);
    setUniqueUser(findEl);
  };
  const handleShowEdit = (data) => {
    setShowEdit(true);
    setUniqueUser(data);
  };
  const handleBanned = (id, data) => {
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
    fetch(`http://localhost:5000/user/createBannedUser`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    fetch(`http://localhost:5000/user/bannedActiveUser/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
        },
      })
        .then((res) => res.json())
        .then((data) => setDbUser(data));
    });
  };
  return (
    <>
      {/* modal */}
      <Modals show={show} user={uniqueUser} handleClose={handleClose} />
      <EditModal show={showEdit} user={uniqueUser} handleClose={handleClose} />
      {/* modal */}
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Active User</span>
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
          <th>Balance</th>
          <th>Details</th>
        </tr>
        {dbUser
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
              <td>{data.balance} BDT</td>
              <td>
                <span>
                  <Button
                    onClick={() => handleShowEdit(data)}
                    color="primary"
                    variant="contained"
                  >
                    <span>
                      <Edit className="viewIcon" />
                    </span>{" "}
                  </Button>{" "}
                  <Button
                    onClick={() => handleBanned(data._id, data)}
                    color="secondary"
                    variant="contained"
                  >
                    <span>
                      <DeleteForeverIcon className="viewIcon" />
                    </span>{" "}
                    Banned
                  </Button>{" "}
                  <Button
                    onClick={() => handleShow(data._id)}
                    color="primary"
                    variant="contained"
                  >
                    <span>
                      <FaRegEye className="viewIcon" />
                    </span>{" "}
                    View
                  </Button>
                </span>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default Index;
