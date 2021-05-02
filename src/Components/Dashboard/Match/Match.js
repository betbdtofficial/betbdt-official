import { Button } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import "./Match.css";
import Modals from "./Modals";

const UserList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getMatch`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  });
  return (
    <>
      {/* modal */}
      <Modals show={show} handleClose={handleClose} />
      {/* modal */}
      <div className="matchWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="heading d-flex align-items-center justify-content-between"
                id="twin-heading"
              >
                <span>Manage Match</span>
                <span>
                  {" "}
                  <Button
                    onClick={handleShow}
                    variant="contained"
                    color="primary"
                  >
                    {" "}
                    <IoIosAdd className="viewIcon" /> Add Match
                  </Button>{" "}
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="matchData">
                <div className="matchHeading d-flex align-items-center justify-content-between">
                  <span className="head">
                    Match List <span class="badge badge-danger">Live</span>
                  </span>
                  <span>
                    <input
                      type="text"
                      className="form-control"
                      name="search"
                      autoComplete="off"
                      placeholder="Search Match..."
                      required
                    />
                  </span>
                </div>
                <table>
                  <tr>
                    <th>#No</th>
                    <th>Match Name</th>
                    <th>Event</th>
                    <th>Start Date</th>
                    <th>Action</th>
                  </tr>
                  {dbData.map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.match1} <span class="badge badge-danger">{data.m1Amount}</span> {" "}VS{" "}{data.match2}{" "}<span class="badge badge-danger">{data.m2Amount}</span></td>
                      <td>{data.event}</td>
                      <td>{data.startdate}, {data.starttime}</td>
                      <td>
                        <span>
                          {" "}
                          <Button color="primary" variant="contained">
                            {" "}
                            <Edit />{" "}
                          </Button>{" "}
                        </span>
                        <span>
                          {" "}
                          <Button color="secondary" variant="contained">
                            {" "}
                            <Delete />{" "}
                          </Button>{" "}
                        </span>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
