import { Button } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

const UpcommingMatch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getUpcomingMatch`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  });
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/deleteUpcomingMatch/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getUpcomingMatch`)
        .then((res) => res.json())
        .then((data) => setDbData(data));
    });
  };
  return (
    <>
      <div className="matchHeading d-flex align-items-center justify-content-between">
        <span className="head">
          Upcomming Match List <span class="badge badge-danger">Upcomming</span>
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
                  <Button color="primary" variant="contained">
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
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default UpcommingMatch;
