import { Button } from "@material-ui/core";
import { Public, Visibility } from "@material-ui/icons";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import "./Draft.css";
import LiveViewModals from "./LiveView";
dotenv.config();
const Draft = () => {
  const [value, setValue] = useState({
    success: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getdraftMatch`,
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
  const handlePublic = (id, data) => {
    const matchData = {
      match1: data.match1,
      match2: data.match2,
      m1Amount: data.m1Amount,
      m2Amount: data.m2Amount,

      title1: data.title1,
      value1: data.title2,
      v1Amount: data.v1Amount,
      value2: data.value2,
      v2Amount: data.v2Amount,

      title2: data.title2,
      value3: data.value3,
      v3Amount: data.v3Amount,
      value4: data.value4,
      v4Amount: data.v4Amount,

      title3: data.title3,
      value5: data.value5,
      v5Amount: data.v5Amount,
      value6: data.value6,
      v6Amount: data.v6Amount,

      title4: data.title4,
      value7: data.value7,
      v7Amount: data.v7Amount,
      value8: data.value8,
      v8Amount: data.v8Amount,

      title5: data.title5,
      value9: data.value9,
      v9Amount: data.v9Amount,
      value10: data.value10,
      v10Amount: data.v10Amount,

      event: data.event,
      startdate: data.startdate,
      starttime: data.starttime,
    };
    fetch(`http://localhost:5000/user/draftDelete/${id}`, {
      // draft delete from draft
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getdraftMatch`,
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
    if (data.matchStatus === "live") {
      // live match add from draft
      fetch(`http://localhost:5000/user/createMatch`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(matchData),
      }).then(() => {
        const values = { ...value };
        values.success = "Match Added !";
        setValue(values);
      });
    } else if (data.matchStatus === "upco") {
      //upcoming match add from draft
      fetch(`http://localhost:5000/user/createUpcomingMatch`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(matchData),
      }).then(() => {
        const values = { ...value };
        values.success = "Match Added !";
        setValue(values);
      });
    }
  };
  const [uniqueMatch, setUniqueMatch] = useState([]);
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
      <LiveViewModals
        show={show}
        match={uniqueMatch}
        handleClose={handleClose}
      />
      {/* modal */}
      <div className="matchHeading d-flex align-items-center justify-content-between">
        <span className="head">
          Draft Match List <span class="badge badge-danger">Draft</span>
        </span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            placeholder="Search Match..."
          />
        </span>
      </div>
      {value.success && <p className="alert alert-success">{value.success}</p>}
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
              <td>
                <span className="number">{index + 1}</span>{" "}
                <span className="upcomingBadge badge badge-danger">
                  {data.matchStatus}
                </span>
              </td>
              <td>
                {data.match1}{" "}
                <span className="badge badge-danger">{data.m1Amount}</span> VS{" "}
                {data.match2}{" "}
                <span className="badge badge-danger">{data.m2Amount}</span>
              </td>
              <td>{data.event}</td>
              <td>
                {data.startdate}, {data.starttime}
              </td>
              <td>
                <span>
                  {" "}
                  <Button
                    onClick={() => handlePublic(data._id, data)}
                    color="secondary"
                    variant="contained"
                  >
                    {" "}
                    <Public />{" "}
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

export default Draft;
