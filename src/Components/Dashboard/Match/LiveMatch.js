import { Button } from "@material-ui/core";
import { Delete, Edit, Visibility } from "@material-ui/icons";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import LiveModals from "./LiveModals";
import LiveViewModals from './LiveView';
dotenv.config();
const LiveMatch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getMatch`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  });
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/deleteMatch/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getMatch`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setDbData(data));
    });
  };
  const [data, setData] = useState({})
  const handleEdit = (datas) =>{
    setShowLive(true);
    setData(datas)
  }
  const [uniqueMatch, setUniqueMatch] = useState([]);
  const [showLive, setShowLive] = useState(false);
  const handleCloseLive = () => setShowLive(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    const findEl = dbData.find((data) => data._id === id);
    setUniqueMatch(findEl);
  };
  return (
    <>
    {/* modal */}
    <LiveViewModals show={show} match={uniqueMatch} handleClose={handleClose} />
    <LiveModals data={data} show={showLive} handleClose={handleCloseLive} />
      {/* modal */}
      <div className="matchHeading d-flex align-items-center justify-content-between">
        <span className="head">
          Live Match List <span class="badge badge-danger">Live</span>
        </span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
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
        {dbData
          .filter((value) => {
            if (searchTerm == "") return value;
            else if (
              value.match1.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return value;
          })
          .map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                {data.match1}{" "}
                <span class="badge badge-danger">{data.m1Amount}</span> VS{" "}
                {data.match2}{" "}
                <span class="badge badge-danger">{data.m2Amount}</span>
              </td>
              <td>{data.event}</td>
              <td>
                {data.startdate}, {data.starttime}
              </td>
              <td>
                <span>
                  {" "}
                  <Button onClick={()=>handleEdit(data)} color="primary" variant="contained">
                    {" "}
                    <Edit />{" "}
                  </Button>{" "}
                </span>
                <span>
                  {" "}
                  <Button
                    onClick={() => handleDelete(data._id)}
                    color="secondary"
                    variant="contained"
                  >
                    {" "}
                    <Delete />{" "}
                  </Button>{" "}
                </span>
                <span>
                  {" "}
                  <Button
                    onClick={() => handleShow(data._id)}
                    color="primary"
                    variant="contained"
                  >
                    {" "}
                    <Visibility />{" "}
                  </Button>{" "}
                </span>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default LiveMatch;
