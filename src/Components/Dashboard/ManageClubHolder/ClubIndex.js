import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
// import Modals from "../Deposit/Modals";
import Modals from "../User/Modals";

const ClubIndex = () => {
  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, []);
  const [uniqueUser, setUniqueUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    const findEl = dbUser.find((data) => data._id === id);
    setUniqueUser(findEl);
  };
  return (
    <>
      {/* modal */}
      <Modals show={show} user={uniqueUser} handleClose={handleClose} />
      {/* modal */}
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Active User</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Active User..."
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
        {dbUser.map((data) => (
          <tr key={data._id}>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.number}</td>
            <td>{data.balance} BDT</td>
            <td>
              <span>
                <Button
                  onClick={() => handleShow(data._id)}
                  color="secondary"
                  variant="contained"
                >
                  <span>
                    <DeleteForeverIcon className="viewIcon" />
                  </span>{" "}
                  Cancel
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

export default ClubIndex;
