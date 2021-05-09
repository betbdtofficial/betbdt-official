import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import Modals from "../Dashboard/User/Modals";

const Member = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, [dbData._id]);

  const [clubHolder, setClubHolder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`)
      .then((res) => res.json())
      .then((data) => setClubHolder(data));
  }, [clubHolder._id]);
  const findClubHolder = clubHolder.find((u) => u.username === club?.club); //find Club holder
  const findUser = dbData.filter((u) => u.club === findClubHolder?.club); // find user
  const [searchTerm, setSearchTerm] = useState("");
  const [uniqueUser, setUniqueUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setUniqueUser(data);
  };
  return (
    <>
      {/* modal */}
      <Modals show={show} user={uniqueUser} handleClose={handleClose} />
      {/* modal */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="winnerHeading d-flex align-items-center justify-content-between">
              <span className="head">Member And Details</span>
              <span>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  autoComplete="off"
                  onChange={(e) => setSearchTerm(e.target.value)}
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
              {findUser
                .filter((value) => {
                  if (searchTerm == "") return value;
                  else if (
                    value.username
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                    return value;
                })
                .map((data) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.number}</td>
                    <td>{data.balance} BDT</td>
                    <td>
                      <span>
                        <Button
                          onClick={() => handleShow(data)}
                          color="secondary"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
