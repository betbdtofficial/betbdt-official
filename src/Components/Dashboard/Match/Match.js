import { Button } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import "./Match.css";
import Modals from "./Modals";

const UserList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                    <IoIosAdd /> Add Match
                  </Button>{" "}
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="matchData">
                <div className="matchHeading d-flex align-items-center justify-content-between">
                  <span className="head">Match List {" "} 
                  <span class="badge badge-danger">Live</span>
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
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Australia VS Pakistan</td>
                    <td>FIFA World Cub 2021</td>
                    <td>Active</td>
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
                  <tr>
                    <td>02</td>
                    <td>Bangladesh VS Bhutan</td>
                    <td>FIFA World Cub 2021</td>
                    <td>Active</td>
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
                  <tr>
                    <td>03</td>
                    <td>Bangladesh VS India</td>
                    <td>FIFA World Cub 2021</td>
                    <td>Active</td>
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
                  <tr>
                    <td>04</td>
                    <td>South Africa VS India</td>
                    <td>FIFA World Cub 2021</td>
                    <td>Active</td>
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
