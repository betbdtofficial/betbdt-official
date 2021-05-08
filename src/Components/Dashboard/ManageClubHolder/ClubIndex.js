import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
// import Modals from "../Deposit/Modals";
import Modals from "../User/Modals";

const ClubIndex = () => {
  const [clubHolder, setClubHolder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`)
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
